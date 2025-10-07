
import React from 'react';
import { Page, User, UserRole } from '../types';
import { DashboardIcon, MessagesIcon, TicketsIcon, TasksIcon, SettingsIcon, LogoutIcon } from './icons';

interface SidebarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  currentUser: User;
}

const NavItem: React.FC<{
  icon: React.ElementType;
  label: string;
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}> = ({ icon: Icon, label, page, currentPage, setCurrentPage }) => {
  const isActive = currentPage === page;
  return (
    <li
      onClick={() => setCurrentPage(page)}
      className={`flex items-center p-3 my-1 rounded-lg cursor-pointer transition-colors duration-200 ${
        isActive
          ? 'bg-whatsapp-green text-white shadow-md'
          : 'text-gray-600 hover:bg-gray-200 hover:text-gray-800'
      }`}
    >
      <Icon />
      <span className="ml-4 font-medium">{label}</span>
    </li>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage, currentUser }) => {
  return (
    <aside className="w-64 bg-white shadow-lg flex flex-col p-4">
      <div className="flex items-center mb-8">
        <div className="bg-whatsapp-green p-2 rounded-lg">
          <MessagesIcon />
        </div>
        <h1 className="text-xl font-bold ml-3 text-text-primary">SaaS Hub</h1>
      </div>
      
      <nav className="flex-1">
        <ul>
          {currentUser.role === UserRole.ADMIN && (
            <NavItem icon={DashboardIcon} label="Statistiques" page="dashboard" currentPage={currentPage} setCurrentPage={setCurrentPage} />
          )}
          <NavItem icon={MessagesIcon} label="Messages" page="messages" currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <NavItem icon={TicketsIcon} label="Tickets" page="tickets" currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <NavItem icon={TasksIcon} label="Tâches" page="tasks" currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </ul>
      </nav>

      <div>
        <ul>
          <NavItem icon={SettingsIcon} label="Paramètres" page="settings" currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </ul>
        <div className="border-t my-4"></div>
        <div className="flex items-center p-2">
            <img src={currentUser.avatar} alt="User Avatar" className="w-10 h-10 rounded-full" />
            <div className="ml-3">
                <p className="font-semibold text-text-primary">{currentUser.name}</p>
                <p className="text-sm text-text-secondary">{currentUser.role}</p>
            </div>
        </div>
        <button className="flex items-center w-full p-3 mt-2 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors duration-200">
          <LogoutIcon />
          <span className="ml-4 font-medium">Déconnexion</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
