import React from 'react';
import { 
  AlertTriangle, 
  Clock, 
  MapPin, 
  Coffee, 
  Heart, 
  MessageCircle, 
  Wrench 
} from 'lucide-react';

function DriverDashboard() {
  const [showReportForm, setShowReportForm] = React.useState(false);
  const [showMaintenanceForm, setShowMaintenanceForm] = React.useState(false);
  const [showSupportForm, setShowSupportForm] = React.useState(false);

  return (
    <div className="space-y-6">
      {/* Status do Motorista */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Seu Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-blue-600 mr-2" />
              <div>
                <p className="text-sm font-medium text-gray-600">Horas Dirigidas</p>
                <p className="text-lg font-semibold">6h30</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <Coffee className="w-5 h-5 text-green-600 mr-2" />
              <div>
                <p className="text-sm font-medium text-gray-600">Próximo Descanso</p>
                <p className="text-lg font-semibold">Em 1h30</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-purple-600 mr-2" />
              <div>
                <p className="text-sm font-medium text-gray-600">Localização Atual</p>
                <p className="text-lg font-semibold">São Paulo, SP</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <Heart className="w-5 h-5 text-red-600 mr-2" />
              <div>
                <p className="text-sm font-medium text-gray-600">Bem-estar</p>
                <p className="text-lg font-semibold">Bom</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botões de Ação Rápida */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Botão Reportar Problema */}
        <button onClick={() => setShowReportForm(true)} className="flex items-center justify-center p-4 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors">
          <AlertTriangle className="w-5 h-5 mr-2" />
          Reportar Problema
        </button>
        {/* Botão Solicitar Manutenção */}
        <button onClick={() => setShowMaintenanceForm(true)} className="flex items-center justify-center p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
          <Wrench className="w-5 h-5 mr-2" />
          Solicitar Manutenção
        </button>
        {/* Botão Contatar Suporte */}
        <button onClick={() => setShowSupportForm(true)} className="flex items-center justify-center p-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
          <MessageCircle className="w-5 h-5 mr-2" />
          Contatar Suporte
        </button>
      </div>

      {/* Modal de Formulários */}
      {showReportForm && <ReportForm onClose={() => setShowReportForm(false)} title="Reportar Problema" />}
      {showMaintenanceForm && <ReportForm onClose={() => setShowMaintenanceForm(false)} title="Solicitar Manutenção" />}
      {showSupportForm && <ReportForm onClose={() => setShowSupportForm(false)} title="Contatar Suporte" />}
    </div>
  );
}

function ReportForm({ onClose, title }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-6 max-w-md w-full">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
            <textarea className="w-full rounded-lg border border-gray-300 px-3 py-2" rows={4} placeholder="Descreva o problema..." />
          </div>
          <div className="flex justify-end space-x-3">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Cancelar</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DriverDashboard;
