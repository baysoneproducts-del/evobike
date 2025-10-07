import React, { useState, useMemo, useRef, useEffect } from 'react';
import { User, Conversation, Message, MessageStatus, MessageAttachment } from '../types';
import { MOCK_CONVERSATIONS, MOCK_USERS } from '../constants';
import { SendIcon, SearchIcon, MoreVertIcon, AttachmentIcon, MicrophoneIcon, DoubleCheckIcon, StatusIcon, NewChatIcon, FilterIcon, PinIcon, PhotoIcon, MuteIcon, EmojiIcon } from './icons';

const whatsappBg = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAACMsr2PAAAABlBMVEV7fXf///879155AAAAAnRSTlMAAQGU/a4AAAAiSURBVHja7MExAQAAAMKg9U9tCU+gAAAAAAAAAIC3AR+QAAEgnT6aAAAAAElFTkSuQmCC')`;

const ReadReceipt: React.FC<{ status?: MessageStatus }> = ({ status }) => {
    if (!status) return null;
    const color = status === 'read' ? '#53bdeb' : '#667781';
    return <DoubleCheckIcon className="w-5 h-5 inline-block" color={color} />;
};

const ConversationItem: React.FC<{
  conversation: Conversation;
  isSelected: boolean;
  onClick: () => void;
}> = ({ conversation, isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center p-3 cursor-pointer border-b border-gray-200/50 ${
      isSelected ? 'bg-gray-200' : 'hover:bg-gray-100'
    }`}
  >
    <img src={`https://i.pravatar.cc/150?u=${conversation.clientName}`} alt="Client" className="w-12 h-12 rounded-full" />
    <div className="flex-1 ml-3">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-text-primary">{conversation.clientName}</p>
        <p className={`text-xs ${conversation.unreadCount > 0 ? 'text-whatsapp-green-light font-bold' : 'text-text-secondary'}`}>{conversation.timestamp}</p>
      </div>
      <div className="flex justify-between items-center mt-1">
        <p className="text-sm text-text-secondary truncate w-48 flex items-center gap-1">
            {conversation.lastMessageFromAgent && <ReadReceipt status={conversation.lastMessageStatus} />}
            {conversation.lastMessageIcon === 'photo' && <PhotoIcon className="w-4 h-4 text-text-secondary" />}
            <span>{conversation.lastMessage}</span>
        </p>
        <div className="flex items-center space-x-2">
            {conversation.isMuted && <MuteIcon className="w-5 h-5 text-text-secondary" />}
            {conversation.unreadCount > 0 && (
              <span className="bg-whatsapp-green-light text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">{conversation.unreadCount}</span>
            )}
            {conversation.pinned && <PinIcon className="w-5 h-5 text-text-secondary" />}
        </div>
      </div>
    </div>
  </div>
);

const OrderAttachment: React.FC<{ attachment: MessageAttachment }> = ({ attachment }) => (
    <div className="bg-white/70 rounded-lg overflow-hidden border border-gray-200 my-1">
        <img src={attachment.payload.url} alt={attachment.payload.title} className="w-full h-auto object-cover"/>
        <div className="p-2">
            <div className="flex justify-between items-start">
                 <h4 className="font-bold text-sm text-blue-600">{attachment.payload.title}</h4>
                 <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-full">{attachment.payload.status}</span>
            </div>
            <div className="text-xs text-gray-600 mt-2 whitespace-pre-wrap">{attachment.payload.details?.['Détails de facturation']}</div>
            <div className="text-xs text-gray-600 mt-1 whitespace-pre-wrap">{attachment.payload.details?.['Détails de livraison']}</div>
            <div className="border-t my-2"></div>
            <div className="text-right font-bold text-sm">{attachment.payload.price}</div>
        </div>
    </div>
);


const MessageBubble: React.FC<{ message: Message }> = ({ message }) => {
  const isAgent = message.sender === 'agent';
  const isSystem = message.sender === 'system';

  if (isSystem) {
    return (
        <div className="self-center text-xs p-2 px-3 rounded-lg shadow my-2 text-gray-700 bg-whatsapp-system-message">
            🔒 {message.text}
        </div>
    );
  }
  
  const agent = isAgent ? MOCK_USERS.find(u => u.id === message.agentId) : null;
  
  const bubbleClass = isAgent 
    ? 'bg-whatsapp-outgoing-message self-end' 
    : 'bg-white self-start';
  
  const tailClass = isAgent ? 'after:right-[-7px] after:bg-whatsapp-outgoing-message' : 'after:left-[-7px] after:bg-white';

  return (
    <div className={`flex ${isAgent ? 'justify-end' : 'justify-start'} mb-1`}>
      <div className={`relative rounded-lg px-3 py-1.5 max-w-md shadow-sm ${bubbleClass} after:content-[""] after:absolute after:top-0 after:w-2 after:h-2.5 after:rounded-bl-none after:rounded-tr-lg after:transform after:-rotate-45 ${tailClass}`}>
        {isAgent && agent && <p className="text-xs font-bold mb-1 text-whatsapp-teal">{agent.name}</p>}
        {message.attachment?.type === 'order' && <OrderAttachment attachment={message.attachment} />}
        <div className="text-sm text-gray-800 mr-12 break-words">
            {message.text}
        </div>
        <div className="absolute bottom-1 right-2 flex items-center">
            <p className="text-right text-[10px] text-gray-500 mr-1">{message.timestamp}</p>
            {isAgent && <ReadReceipt status={message.status} />}
        </div>
      </div>
    </div>
  );
};

const Messages: React.FC<{ currentUser: User }> = ({ currentUser }) => {
  const [conversations, setConversations] = useState<Conversation[]>(MOCK_CONVERSATIONS);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(conversations[3]);
  const [newMessage, setNewMessage] = useState('');

  const chatEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedConversation?.messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '' || !selectedConversation) return;
    
    const message: Message = {
        id: Date.now(),
        text: newMessage,
        sender: 'agent',
        agentId: currentUser.id,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'sent'
    };

    const updatedConversation = {
        ...selectedConversation,
        messages: [...selectedConversation.messages, message],
        lastMessage: newMessage,
        timestamp: message.timestamp,
        unreadCount: 0,
        lastMessageStatus: message.status,
        lastMessageFromAgent: true,
    };

    setSelectedConversation(updatedConversation);
    setConversations(conversations.map(c => c.id === updatedConversation.id ? updatedConversation : c));
    setNewMessage('');
  };

  return (
    <div className="flex h-full bg-white overflow-hidden w-full">
      {/* Conversation List Pane */}
      <div className="w-full md:w-1/3 xl:w-1/4 border-r border-gray-200 flex flex-col">
        {/* Header */}
        <header className="bg-light-gray p-3 flex justify-between items-center h-16">
            <img src={currentUser.avatar} alt={currentUser.name} className="w-10 h-10 rounded-full cursor-pointer"/>
            <div className="flex items-center space-x-4 text-text-secondary">
                 <StatusIcon className="w-6 h-6 cursor-pointer" />
                 <NewChatIcon className="w-6 h-6 cursor-pointer" />
                 <MoreVertIcon className="w-6 h-6 cursor-pointer" />
            </div>
        </header>

        {/* Search and Filters */}
        <div className="p-3 bg-white border-b border-light-gray">
            <div className="flex items-center space-x-2">
                <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="w-5 h-5 text-gray-400" />
                    </div>
                    <input type="text" placeholder="Rechercher ou démarrer une discussion" className="w-full p-2 pl-10 bg-light-gray rounded-lg focus:outline-none text-sm"/>
                </div>
                <button><FilterIcon className="text-text-secondary" /></button>
            </div>
             <div className="flex space-x-2 mt-3 overflow-x-auto pb-1">
                {['Toutes', 'Non lues', 'Favoris', 'Groupes'].map(filter => (
                     <button key={filter} className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600 whitespace-nowrap hover:bg-gray-200">
                        {filter}
                    </button>
                ))}
                <select className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600 focus:outline-none appearance-none">
                    <option>Étiquettes</option>
                </select>
            </div>
        </div>

        {/* Conversation List */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map(conv => (
            <ConversationItem
              key={conv.id}
              conversation={conv}
              isSelected={selectedConversation?.id === conv.id}
              onClick={() => setSelectedConversation(conv)}
            />
          ))}
        </div>
      </div>
      
      {/* Chat Window Pane */}
      <div className="w-full md:w-2/3 xl:w-3/4 flex flex-col bg-app-background">
        {selectedConversation ? (
          <>
            <header className="p-3 bg-light-gray flex items-center justify-between border-l border-gray-200 h-16">
              <div className="flex items-center">
                <img src={`https://i.pravatar.cc/150?u=${selectedConversation.clientName}`} alt="Client" className="w-10 h-10 rounded-full" />
                <div className="ml-3">
                  <p className="font-semibold">{selectedConversation.clientName}</p>
                  <p className="text-sm text-text-secondary">{selectedConversation.clientNumber}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-text-secondary">
                <SearchIcon className="w-6 h-6 cursor-pointer" />
                <MoreVertIcon className="w-6 h-6 cursor-pointer" />
              </div>
            </header>
            
            <div className="flex-1 overflow-y-auto p-4" style={{ backgroundImage: whatsappBg }}>
                <div className="flex flex-col">
                    {selectedConversation.messages.map(msg => <MessageBubble key={msg.id} message={msg} />)}
                    <div ref={chatEndRef} />
                </div>
            </div>

            <footer className="p-3 bg-light-gray flex items-center">
              <button className="text-text-secondary p-2">
                <EmojiIcon />
              </button>
              <button className="text-text-secondary p-2">
                <AttachmentIcon />
              </button>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Entrez un message"
                className="flex-1 p-2.5 mx-2 border-none rounded-lg focus:outline-none focus:ring-0 text-sm"
              />
              {newMessage ? (
                 <button onClick={handleSendMessage} className="bg-whatsapp-teal text-white p-2.5 rounded-full hover:bg-whatsapp-teal-dark transition-colors">
                    <SendIcon className="w-5 h-5"/>
                </button>
              ) : (
                <button className="text-text-secondary p-2">
                    <MicrophoneIcon className="w-6 h-6" />
                </button>
              )}
            </footer>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-text-secondary">
            <div className="text-center">
                <h2 className="text-3xl text-gray-500">SaaS Hub pour WhatsApp</h2>
                <p className="mt-2 text-gray-600">Sélectionnez une conversation pour commencer à discuter.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;