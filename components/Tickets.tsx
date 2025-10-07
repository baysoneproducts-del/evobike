
import React, { useState, useMemo } from 'react';
import { User, Ticket, TicketStatus, UserRole } from '../types';
import { MOCK_TICKETS, MOCK_USERS, MOCK_WHATSAPP_ACCOUNTS } from '../constants';

const getStatusClass = (status: TicketStatus) => {
  switch (status) {
    case TicketStatus.OPEN:
      return 'bg-blue-100 text-blue-800';
    case TicketStatus.PENDING:
      return 'bg-yellow-100 text-yellow-800';
    case TicketStatus.RESOLVED:
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const TicketRow: React.FC<{ ticket: Ticket; currentUser: User; onAssign: (ticketId: number, userId: number) => void }> = ({ ticket, currentUser, onAssign }) => {
    const assignedUser = MOCK_USERS.find(u => u.id === ticket.assignedTo);

    return (
        <tr className="bg-white border-b hover:bg-gray-50">
            <td className="px-6 py-4 font-medium text-gray-900">{ticket.clientName}</td>
            <td className="px-6 py-4 text-gray-600 truncate max-w-xs">{ticket.lastMessage}</td>
            <td className="px-6 py-4">
                {currentUser.role === UserRole.ADMIN ? (
                    <select
                        value={ticket.assignedTo}
                        onChange={(e) => onAssign(ticket.id, parseInt(e.target.value))}
                        className="p-2 border rounded-md bg-gray-50"
                    >
                        {MOCK_USERS.filter(u => u.role !== UserRole.ADMIN).map(user => (
                            <option key={user.id} value={user.id}>{user.name}</option>
                        ))}
                    </select>
                ) : (
                    <div className="flex items-center">
                        <img src={assignedUser?.avatar} alt={assignedUser?.name} className="w-8 h-8 rounded-full mr-2"/>
                        <span>{assignedUser?.name}</span>
                    </div>
                )}
            </td>
            <td className="px-6 py-4">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(ticket.status)}`}>
                    {ticket.status}
                </span>
            </td>
            <td className="px-6 py-4">
                <button className="text-accent-blue hover:underline font-medium">Voir</button>
            </td>
        </tr>
    );
};


const Tickets: React.FC<{ currentUser: User }> = ({ currentUser }) => {
  const [tickets, setTickets] = useState(MOCK_TICKETS);
  const [selectedAccountId, setSelectedAccountId] = useState<number>(MOCK_WHATSAPP_ACCOUNTS[0].id);

  const handleAssign = (ticketId: number, userId: number) => {
    setTickets(tickets.map(t => t.id === ticketId ? { ...t, assignedTo: userId } : t));
  };
  
  const filteredTickets = useMemo(() => {
    let roleFilteredTickets = tickets;
    if (currentUser.role !== UserRole.ADMIN) {
        roleFilteredTickets = tickets.filter(t => t.assignedTo === currentUser.id);
    }
    return roleFilteredTickets.filter(t => t.whatsappAccountId === selectedAccountId);
  }, [currentUser, tickets, selectedAccountId]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Liste des Tickets</h3>
        <div>
          <label htmlFor="wa-account-select-tickets" className="sr-only">Boîte de réception</label>
          <select
            id="wa-account-select-tickets"
            className="p-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent-blue"
            value={selectedAccountId}
            onChange={(e) => setSelectedAccountId(parseInt(e.target.value, 10))}
          >
            {MOCK_WHATSAPP_ACCOUNTS.map(account => (
              <option key={account.id} value={account.id}>
                {account.name}
              </option>
            ))}
          </select>
        </div>
      </div>
       <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Client</th>
                <th scope="col" className="px-6 py-3">Dernier Message</th>
                <th scope="col" className="px-6 py-3">Assigné à</th>
                <th scope="col" className="px-6 py-3">Statut</th>
                <th scope="col" className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTickets.map(ticket => (
                  <TicketRow key={ticket.id} ticket={ticket} currentUser={currentUser} onAssign={handleAssign} />
              ))}
            </tbody>
          </table>
          {filteredTickets.length === 0 && (
            <p className="text-center py-4 text-gray-500">Aucun ticket à afficher pour cette boîte de réception.</p>
          )}
        </div>
    </div>
  );
};

export default Tickets;
