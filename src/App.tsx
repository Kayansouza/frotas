// App.tsx
import React, { useState } from 'react';
import {
  Menu,
  Truck,
  BarChart3,
  Settings,
  FileText,
  Bell,
  Search,
  User,
  X,
  Wrench,
} from 'lucide-react';

// Importação dos componentes de conteúdo
import DashboardContent from './components/DashboardContent';
import EntriesContent from './components/EntriesContent';
import DriverDashboard from './components/DriverDashboard';
import MaintenanceHistory from './components/MaintenanceHistory';
import DriverReportForm from './components/DriverReportForm';
import Relatorio from './components/Relatorio';
// Caso você tenha um componente para "Configurações", importe-o aqui; caso contrário, usaremos um placeholder.
 
// Outros componentes que não estão vinculados ao menu foram removidos para manter a consistência

// Definição do tipo para os itens de navegação
type NavItem = {
  name: string;
  icon: React.ReactNode;
};

// Itens do menu (sidebar)
const navItems: NavItem[] = [
  { name: 'Resumo Geral', icon: <BarChart3 className="w-5 h-5" /> },
  { name: 'Entrada/Saída', icon: <Truck className="w-5 h-5" /> },
  { name: 'Área do Motorista', icon: <User className="w-5 h-5" /> },
  { name: 'Manutenção', icon: <Wrench className="w-5 h-5" /> },
  { name: 'Relatórios', icon: <FileText className="w-5 h-5" /> },
  { name: 'Configurações', icon: <Settings className="w-5 h-5" /> },
  { name: 'Relatório do Motorista', icon: <FileText className="w-5 h-5" /> },
];

function App() {
  // Estados para controlar a visibilidade da sidebar, o menu mobile e a aba ativa
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('Resumo Geral');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Renderiza o conteúdo com base na aba ativa
  const renderContent = () => {
    switch (activeTab) {
      case 'Resumo Geral':
        return <DashboardContent />;
      case 'Entrada/Saída':
        return <EntriesContent />;
      case 'Área do Motorista':
        return <DriverDashboard />;
      case 'Manutenção':
        return <MaintenanceHistory />;
      case 'Relatórios':
        return <Relatorio />;
      case 'Configurações':
        // Caso possua um componente para Configurações, importe-o e utilize-o aqui.
        return <div>Configurações (conteúdo do componente a ser desenvolvido)</div>;
      case 'Relatório do Motorista':
        return <DriverReportForm />;
      default:
        return <div>Conteúdo não disponível.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Botão de Menu Mobile */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg bg-white shadow-md"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transition-transform duration-300 transform
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          bg-white border-r border-gray-200`}
      >
        <div className="h-full px-3 py-4 flex flex-col">
          <div className="flex items-center justify-between mb-8 px-2">
            <div className="flex items-center space-x-3">
              <Truck className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold">FleetManager</span>
            </div>
          </div>

          {/* Itens de Navegação */}
          <nav className="flex-1 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`w-full flex items-center px-4 py-3 text-sm rounded-lg border-l-4
                  ${activeTab === item.name
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-transparent text-gray-700 hover:bg-gray-50'}`}
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <div className={`lg:ml-64 transition-all duration-300 ${isSidebarOpen || isMobileMenuOpen ? '' : 'ml-0'}`}>
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800">{activeTab}</h1>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Bell className="w-6 h-6 text-gray-600" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <User className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </header>

        {/* Conteúdo da Página */}
        <main className="p-6">{renderContent()}</main>
      </div>
    </div>
  );
}

export default App;
