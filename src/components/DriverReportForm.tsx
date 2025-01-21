import React, { useState } from 'react';
import { 
  Menu, Truck, BarChart3, Settings, FileText, Bell, Search, User, X, Wrench 
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DashboardContent from './DashboardContent';
import EntriesContent from './EntriesContent';
import DriverDashboard from './DriverDashboard';
import MaintenanceHistory from './MaintenanceHistory';

type NavItem = {
  name: string;
  path: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { name: 'Resumo Geral', path: '/', icon: <BarChart3 className="w-5 h-5" /> },
  { name: 'Entrada/Saída', path: '/entries', icon: <Truck className="w-5 h-5" /> },
  { name: 'Área do Motorista', path: '/driver-area', icon: <User className="w-5 h-5" /> },
  { name: 'Manutenção', path: '/maintenance', icon: <Wrench className="w-5 h-5" /> },
  { name: 'Relatórios', path: '/reports', icon: <FileText className="w-5 h-5" /> },
  { name: 'Configurações', path: '/settings', icon: <Settings className="w-5 h-5" /> },
  { name: 'Relatório do Motorista', path: '/driver-report', icon: <FileText className="w-5 h-5" /> },
];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Botão de Menu Mobile */}
        <div className="lg:hidden fixed top-4 left-4 z-50">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-white shadow-md"
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

            <nav className="flex-1 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="w-full flex items-center px-4 py-3 text-sm rounded-lg border-l-4
                    text-gray-700 hover:bg-gray-50 hover:border-blue-600"
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Conteúdo Principal */}
        <div className={`lg:ml-64 transition-margin duration-300 ${isSidebarOpen ? '' : 'ml-0'}`}>
          {/* Header */}
          <header className="bg-white border-b border-gray-200 px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-800">FleetManager</h1>
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

          {/* Rotas */}
          <main className="p-6">
            <Routes>
              <Route path="/" element={<DashboardContent />} />
              <Route path="/entries" element={<EntriesContent />} />
              <Route path="/driver-area" element={<DriverDashboard />} />
              <Route path="/maintenance" element={<MaintenanceHistory />} />
              <Route path="/reports" element={<div>Relatórios Gerais</div>} />
              <Route path="/settings" element={<div>Configurações do Sistema</div>} />
              <Route path="/driver-report" element={<DriverReportForm />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;