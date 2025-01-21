import React from 'react';
import { 
  AlertTriangle, 
  Clock, 
  MapPin, 
  Coffee, 
  Heart, 
  MessageCircle, 
  Wrench // Usando Wrench no lugar de Tool
} from 'lucide-react';

function DriverDashboard() {
  const [showReportForm, setShowReportForm] = React.useState(false);

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
        <button
          onClick={() => setShowReportForm(true)}
          className="flex items-center justify-center p-4 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors"
        >
          <AlertTriangle className="w-5 h-5 mr-2" />
          Reportar Problema
        </button>
        <button className="flex items-center justify-center p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
          <Wrench className="w-5 h-5 mr-2" /> {/* Changed from Tool to Wrench */}
          Solicitar Manutenção
        </button>
        <button className="flex items-center justify-center p-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
          <MessageCircle className="w-5 h-5 mr-2" />
          Contatar Suporte
        </button>
      </div>

      {/* Formulário de Reporte de Problemas */}
      {showReportForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Reportar Problema</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de Problema
                </label>
                <select className="w-full rounded-lg border border-gray-300 px-3 py-2">
                  <option>Mecânico</option>
                  <option>Saúde</option>
                  <option>Rota</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Descrição
                </label>
                <textarea 
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  rows={4}
                  placeholder="Descreva o problema em detalhes..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Urgência
                </label>
                <select className="w-full rounded-lg border border-gray-300 px-3 py-2">
                  <option>Baixa</option>
                  <option>Média</option>
                  <option>Alta</option>
                  <option>Emergência</option>
                </select>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowReportForm(false)}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Enviar Reporte
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DriverDashboard;