import { User, UserRole, Conversation, Ticket, TicketStatus, Task, WhatsAppAccount } from './types';

export const MOCK_USERS: User[] = [
  { id: 1, name: 'Alexandre Durant', avatar: 'https://i.pravatar.cc/150?u=alex', role: UserRole.ADMIN },
  { id: 2, name: 'Béatrice Martin', avatar: 'https://i.pravatar.cc/150?u=beatrice', role: UserRole.SALESPERSON },
  { id: 3, name: 'Charles Lefebvre', avatar: 'https://i.pravatar.cc/150?u=charles', role: UserRole.SALESPERSON },
  { id: 4, name: 'David Moreau', avatar: 'https://i.pravatar.cc/150?u=david', role: UserRole.SALESPERSON },
];

export const MOCK_WHATSAPP_ACCOUNTS: WhatsAppAccount[] = [
  { id: 1, name: 'Service Commercial Principal', phoneNumber: '+1-202-555-0174' },
  { id: 2, name: 'Support Technique', phoneNumber: '+1-202-555-0182' },
  { id: 3, name: 'Infos Produit', phoneNumber: '+1-202-555-0199' },
];

export const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: 1,
    clientName: 'Marketing DIG Evobike',
    clientNumber: '+212 659-572525',
    lastMessage: 'Motonomad: Ok',
    timestamp: 'Hier',
    unreadCount: 0,
    messages: [
      { id: 1, text: 'Ok', sender: 'user', timestamp: 'Hier', status: 'read' },
    ],
    whatsappAccountId: 1,
    pinned: true,
    isMuted: false,
    lastMessageFromAgent: false,
  },
  {
    id: 2,
    clientName: 'Les paiements Evobike $',
    clientNumber: '+212 713-053916',
    lastMessage: 'El Mehdi: ✅',
    timestamp: '17:39',
    unreadCount: 0,
    messages: [
       { id: 1, text: '✅', sender: 'user', timestamp: '17:39', status: 'read' },
    ],
    whatsappAccountId: 1,
    pinned: true,
    isMuted: false,
    lastMessageFromAgent: false,
    lastMessageStatus: 'read',
  },
   {
    id: 3,
    clientName: 'Evobike team',
    clientNumber: '+212 643-270432',
    lastMessage: 'Nadia Elabbar: ✅',
    timestamp: '17:14',
    unreadCount: 0,
    messages: [
      { id: 1, text: '✅', sender: 'user', timestamp: '17:14', status: 'read' },
    ],
    whatsappAccountId: 1,
    pinned: false,
    isMuted: true,
    lastMessageFromAgent: false,
  },
   {
    id: 4,
    clientName: '+212 659-572525',
    clientNumber: '+212 659-572525',
    lastMessage: 'Commande n°89482',
    timestamp: '18:45',
    unreadCount: 3,
    messages: [
      { 
        id: 1, 
        text: 'Voici les détails de votre commande.', 
        sender: 'agent', 
        agentId: 2,
        timestamp: '18:45', 
        status: 'delivered',
        attachment: {
            type: 'order',
            payload: {
                url: 'https://placehold.co/400x200/e7ffdb/111b21?text=Evobike',
                title: 'Commande n°89482',
                status: 'En attente',
                details: {
                    "Détails de facturation": "Elmehdi Aboussaber\nAgadir\nE-mail: elmehdi.ab@gmail.com\n...",
                    "Détails de livraison": "Elmehdi Aboussaber\nRécupérer à la ville de Casablanca...",
                },
                price: "790,00 Dhs"
            }
        }
      },
       {
        id: 2,
        sender: 'system',
        text: 'Les messages et les appels sont chiffrés de bout en bout. Seules les personnes prenant part à cette discussion peuvent les lire, les écouter ou les partager. Cliquez pour en savoir plus.',
        timestamp: 'Aujourd\'hui'
       }
    ],
    whatsappAccountId: 1,
    pinned: false,
    isMuted: false,
    lastMessageFromAgent: true,
    lastMessageIcon: 'photo',
    lastMessageStatus: 'delivered',
  },
  {
    id: 5,
    clientName: 'Livraison EVOBIKE',
    clientNumber: '+212 717-205569',
    lastMessage: 'Bonjour ! Puis-je en savoir plus à ce sujet ?',
    timestamp: '17:02',
    unreadCount: 1,
    messages: [
      { id: 1, text: 'Bonjour ! Puis-je en savoir plus à ce sujet ?', sender: 'user', timestamp: '17:02', status: 'read' },
    ],
    whatsappAccountId: 2,
    pinned: false,
    isMuted: false,
    lastMessageFromAgent: false,
  },
];

export const MOCK_TICKETS: Ticket[] = [
  { id: 1, conversationId: 1, clientName: 'Marketing DIG Evobike', lastMessage: 'Motonomad: Ok', assignedTo: 2, status: TicketStatus.OPEN, whatsappAccountId: 1 },
  { id: 2, conversationId: 2, clientName: 'Les paiements Evobike $', lastMessage: 'El Mehdi: ✅', assignedTo: 3, status: TicketStatus.RESOLVED, whatsappAccountId: 1 },
  { id: 3, conversationId: 3, clientName: 'Evobike team', lastMessage: 'Nadia Elabbar: ✅', assignedTo: 2, status: TicketStatus.PENDING, whatsappAccountId: 1 },
  { id: 4, conversationId: 4, clientName: '+212 659-572525', lastMessage: 'Commande n°89482', assignedTo: 4, status: TicketStatus.OPEN, whatsappAccountId: 1 },
  { id: 5, conversationId: 5, clientName: 'Livraison EVOBIKE', lastMessage: 'Bonjour ! Puis-je en savoir plus...', assignedTo: 3, status: TicketStatus.RESOLVED, whatsappAccountId: 2 },
];

export const MOCK_TASKS: Task[] = [
  { id: 1, title: 'Relancer le Client A pour le devis', assignedTo: 2, createdBy: 1, completed: false, dueDate: '2024-07-28' },
  { id: 2, title: 'Préparer la démo pour Client D', assignedTo: 3, createdBy: 1, completed: false, dueDate: '2024-07-29' },
  { id: 3, title: 'Finaliser le rapport de ventes Q2', assignedTo: 1, createdBy: 1, completed: true, dueDate: '2024-07-25' },
  { id: 4, title: 'Contacter le support technique pour le client E', assignedTo: 4, createdBy: 1, completed: false, dueDate: '2024-07-28' },
];