import React from 'react';
import { Wrench, Calendar, AlertCircle, CheckCircle } from 'lucide-react';

const maintenanceHistory = [
  {
    id: 1,
    truck: 'ABC-1234',
    type: 'Preventiva',
    date: '2024-02-15',
    description: 'Troca de óleo e filtros',
    status: 'Concluída',
    cost: 'R$ 850,00'
  },
  {
    id: 2,
    truck: 'DEF-5678',
    type: 'Corretiva',
    date: '2024-02-20',
    description: 'Reparo no sistema de freios',
    status: 'Em andamento',
    cost: 'R$ 1.200,00'
  }
];

function MaintenanceHistory() {
  const [filtroTipo, setFiltroTipo] = React.useState('todos');
  const [filtroPeriodo, setFiltroPeriodo] = React.useState('30dias');

  return (
    <div className="space-y-6">
      {/* Filtros */}
      <div className="flex flex-wrap gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de Manutenção
          </label>
          <select
            value={filtroTipo}
            onChange={(e) => setFiltroTipo(e.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2"
          >
            <option value="todos">Todos</option>
            <option value="preventiva">Preventiva</option>
            <option value="corretiva">Corretiva</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Período
          </label>
          <select
            value={filtroPeriodo}
            onChange={(e) => setFiltroPeriodo(e.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2"
          >
            <option value="7dias">Últimos 7 dias</option>
            <option value="30dias">Últimos 30 dias</option>
            <option value="90dias">Últimos 90 dias</option>
            <option value="365dias">Último ano</option>
          </select>
        </div>
      </div>

      {/* Histórico de Manutenção */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Histórico de Manutenção</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-gray-500">
                  <th className="pb-4 pr-6">Caminhão</th>
                  <th className="pb-4 pr-6">Tipo</th>
                  <th className="pb-4 pr-6">Data</th>
                  <th className="pb-4 pr-6">Descrição</th>
                  <th className="pb-4 pr-6">Status</th>
                  <th className="pb-4">Custo</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {maintenanceHistory.map((maintenance) => (
                  <tr key={maintenance.id} className="border-t border-gray-100">
                    <td className="py-4 pr-6">{maintenance.truck}</td>
                    <td className="py-4 pr-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${maintenance.type === 'Preventiva' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'}`}>
                        {maintenance.type}
                      </span>
                    </td>
                    <td className="py-4 pr-6">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-gray-400 mr-1" />
                        {maintenance.date}
                      </div>
                    </td>
                    <td className="py-4 pr-6">{maintenance.description}</td>
                    <td className="py-4 pr-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${maintenance.status === 'Concluída' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {maintenance.status === 'Concluída' ? (
                          <CheckCircle className="w-3 h-3 mr-1" />
                        ) : (
                          <AlertCircle className="w-3 h-3 mr-1" />
                        )}
                        {maintenance.status}
                      </span>
                    </td>
                    <td className="py-4">{maintenance.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaintenanceHistory;