import React, { useState } from 'react';

function SettingsPage() {
  const [settings, setSettings] = useState({
    theme: 'light',
    notifications: true,
  });

  const handleToggleTheme = () => {
    setSettings((prev) => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light',
    }));
  };

  const handleToggleNotifications = () => {
    setSettings((prev) => ({
      ...prev,
      notifications: !prev.notifications,
    }));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Configurações</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Tema</label>
          <button
            onClick={handleToggleTheme}
            className={`px-4 py-2 rounded ${
              settings.theme === 'light' ? 'bg-gray-200' : 'bg-gray-800 text-white'
            }`}
          >
            Modo {settings.theme === 'light' ? 'Claro' : 'Escuro'}
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium">Notificações</label>
          <button
            onClick={handleToggleNotifications}
            className={`px-4 py-2 rounded ${
              settings.notifications ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}
          >
            {settings.notifications ? 'Ativadas' : 'Desativadas'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
