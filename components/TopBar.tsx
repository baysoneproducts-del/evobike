import React from 'react';
import { Service, ServiceType } from '../types';
import { PlusIcon, MessengerIcon, InstagramIcon, WhatsAppIcon } from './icons';

interface TopBarProps {
  services: Service[];
  onAddService: () => void;
}

const ServiceIcon: React.FC<{ service: Service, onClick?: () => void }> = ({ service, onClick }) => {
    let IconComponent;
    switch(service.type) {
        case ServiceType.WHATSAPP: IconComponent = WhatsAppIcon; break;
        case ServiceType.MESSENGER: IconComponent = MessengerIcon; break;
        case ServiceType.INSTAGRAM: IconComponent = InstagramIcon; break;
        default: return null;
    }

    return (
        <button onClick={onClick} className="p-2 rounded-md hover:bg-gray-700/50 group relative flex-shrink-0">
            <IconComponent />
            <span className="absolute top-full mt-2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                {service.name}
            </span>
        </button>
    );
}

const TopBar: React.FC<TopBarProps> = ({ services, onAddService }) => {
  return (
    <div className="bg-dark-gray text-white h-16 flex items-center px-4 shadow-lg z-20">
      <div className="flex-grow flex items-center space-x-2 overflow-x-auto">
        {services.map(service => (
            <ServiceIcon key={service.id} service={service} />
        ))}
      </div>
      <button 
        onClick={onAddService} 
        className="p-3 rounded-full hover:bg-gray-700/50 group relative flex-shrink-0"
        aria-label="Ajouter un compte"
      >
        <PlusIcon />
        <span className="absolute top-full mt-2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
          Ajouter un compte
        </span>
      </button>
    </div>
  );
};

export default TopBar;