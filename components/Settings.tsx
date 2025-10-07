
import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-text-primary mb-6">Paramètres</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-text-primary border-b pb-2 mb-4">Profil</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nom</label>
              <input type="text" defaultValue="Alexandre Durant" className="mt-1 block w-full md:w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-blue focus:border-accent-blue"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" defaultValue="alexandre.durant@saashub.com" className="mt-1 block w-full md:w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-blue focus:border-accent-blue"/>
            </div>
            <button className="px-4 py-2 bg-accent-blue text-white rounded-md hover:bg-blue-600">Mettre à jour</button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-text-primary border-b pb-2 mb-4">Notifications</h3>
          <div className="flex items-center">
            <input id="notifications" type="checkbox" className="h-4 w-4 text-accent-blue border-gray-300 rounded focus:ring-accent-blue" defaultChecked/>
            <label htmlFor="notifications" className="ml-2 block text-sm text-gray-900">Activer les notifications de bureau</label>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-text-primary border-b pb-2 mb-4">Intégrations</h3>
          <p className="text-gray-600">
            La connexion à l'API WhatsApp Business est actuellement active.
          </p>
        </div>

         <div>
          <h3 className="text-lg font-semibold text-text-primary border-b pb-2 mb-4">Apparence</h3>
           <div className="flex items-center space-x-4">
              <p className="text-gray-600">Thème :</p>
              <button className="px-4 py-2 border border-gray-300 rounded-md bg-gray-100">Clair</button>
              <button className="px-4 py-2 border border-gray-300 rounded-md">Sombre</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
