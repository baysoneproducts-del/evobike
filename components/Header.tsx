
import React from 'react';
import { Page, User, UserRole } from '../types';
import { MOCK_USERS } from '../constants';

interface HeaderProps {
  currentPage: Page;
  currentUser: User;
  setCurrentUser: (user: User) => void;
}

const pageTitles: { [key in Page]: string } = {
  dashboard: 'Tableau de bord',
  messages: 'Messagerie Centralisée',
  tickets: 'Gestion des Tickets',
  tasks: 'Gestion des Tâches',
  settings: 'Paramètres',
};

const Header: React.FC<HeaderProps> = ({ currentPage, currentUser, setCurrentUser }) => {
  const handleUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedUser = MOCK_USERS.find(user => user.id === parseInt(e.target.value));
    if (selectedUser) {
      setCurrentUser(selectedUser);
    }
  };
  
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h2 className="text-2xl font-bold text-text-primary">{pageTitles[currentPage]}</h2>
      <div className="flex items-center">
        <label htmlFor="user-select" className="text-sm font-medium text-gray-700 mr-2">Vue en tant que:</label>
        <select
          id="user-select"
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-accent-blue focus:border-accent-blue sm:text-sm rounded-md"
          value={currentUser.id}
          onChange={handleUserChange}
        >
          {MOCK_USERS.map(user => (
            <option key={user.id} value={user.id}>
              {user.name} ({user.role})
            </option>
          ))}
        </select>
      </div>
    </header>
  );
};

export default Header;
