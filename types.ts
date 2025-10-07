export type Page = 'dashboard' | 'messages' | 'tickets' | 'tasks' | 'settings';

export enum UserRole {
  ADMIN = 'Admin',
  SALESPERSON = 'Commercial',
}

export interface User {
  id: number;
  name: string;
  avatar: string;
  role: UserRole;
}

export interface WhatsAppAccount {
  id: number;
  name: string;
  phoneNumber: string;
}

export type MessageStatus = 'sent' | 'delivered' | 'read';

export interface MessageAttachment {
    type: 'image' | 'order';
    payload: {
        url?: string;
        title?: string;
        details?: Record<string, string>;
        price?: string;
        status?: string;
    }
}

export interface Message {
  id: number;
  text: string;
  sender: 'user' | 'agent' | 'system';
  agentId?: number;
  timestamp: string;
  status?: MessageStatus;
  attachment?: MessageAttachment;
}

export interface Conversation {
  id: number;
  clientName: string;
  clientNumber: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  messages: Message[];
  whatsappAccountId: number;
  lastMessageStatus?: MessageStatus;
  pinned: boolean;
  isMuted: boolean;
  lastMessageFromAgent: boolean;
  lastMessageIcon?: 'photo' | 'document';
}

export enum TicketStatus {
  PENDING = 'En attente',
  RESOLVED = 'Résolu',
  OPEN = 'Ouvert',
}

export interface Ticket {
  id: number;
  conversationId: number;
  clientName: string;
  lastMessage: string;
  assignedTo: number; // User ID
  status: TicketStatus;
  whatsappAccountId: number;
}

export interface Task {
  id: number;
  title: string;
  assignedTo: number; // User ID
  createdBy: number; // User ID
  completed: boolean;
  dueDate: string;
}

export interface StatCardData {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: React.ElementType;
}

export enum ServiceType {
    WHATSAPP,
    MESSENGER,
    INSTAGRAM,
}

export interface Service {
    id: string; // e.g., 'whatsapp-1', 'messenger'
    name: string;
    type: ServiceType;
}