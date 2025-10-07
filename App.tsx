
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Messages from './components/Messages';
import Tasks from './components/Tasks';
import Tickets from './components/Tickets';
import Settings from './components/Settings';
import Header from './components/Header';
import TopBar from './components/TopBar';
import { Page, User, UserRole, WhatsAppAccount, Service, ServiceType } from './types';
import { MOCK_USERS, MOCK_WHATSAPP_ACCOUNTS } from './constants';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User>(MOCK_USERS[0]); // Default to Admin/Manager
  const [currentPage, setCurrentPage] = useState<Page>('messages');
  
  const [services, setServices] = useState<Service[]>(() => {
    const whatsAppServices: Service[] = MOCK_WHATSAPP_ACCOUNTS.map(acc => ({
      id: `whatsapp-${acc.id}`,
      name: acc.name,
      type: ServiceType.WHATSAPP,
    }));
    return [
      ...whatsAppServices,
      { id: 'messenger', name: 'Messenger', type: ServiceType.MESSENGER },
      { id: 'instagram', name: 'Instagram', type: ServiceType.INSTAGRAM },
    ];
  });

  const handleAddAccount = () => {
    // This would typically open a modal
    console.log("Add new account initiated");
  };


  const handleSetCurrentUser = (user: User) => {
    setCurrentUser(user);
    // If the new user is not an admin and the current page is the dashboard,
    // redirect them to the messages page.
    if (user.role !== UserRole.ADMIN && currentPage === 'dashboard') {
      setCurrentPage('messages');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        // Prevent rendering dashboard for non-admins, though redirection should handle this.
        if (currentUser.role !== UserRole.ADMIN) {
          return <Messages currentUser={currentUser} />;
        }
        return <div className="p-4 md:p-6 lg:p-8"><Dashboard currentUser={currentUser} /></div>;
      case 'messages':
        return <Messages currentUser={currentUser} />;
      case 'tasks':
        return <div className="p-4 md:p-6 lg:p-8"><Tasks currentUser={currentUser} /></div>;
      case 'tickets':
        return <div className="p-4 md:p-6 lg:p-8"><Tickets currentUser={currentUser} /></div>;
      case 'settings':
        return <div className="p-4 md:p-6 lg:p-8"><Settings /></div>;
      default:
        return <div className="p-4 md:p-6 lg:p-8"><Dashboard currentUser={currentUser} /></div>;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-light-gray font-sans">
      <TopBar services={services} onAddService={handleAddAccount} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} currentUser={currentUser} />
        <main className="flex-1 flex flex-col overflow-hidden">
          {currentPage !== 'messages' && (
             <Header 
              currentPage={currentPage} 
              currentUser={currentUser} 
              setCurrentUser={handleSetCurrentUser}
            />
          )}
          <div className={`flex-1 overflow-y-auto ${currentPage !== 'messages' ? 'bg-gray-50' : 'bg-app-background'}`}>
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;