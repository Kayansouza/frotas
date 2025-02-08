import React, { useState } from 'react';
import { Calendar, AlertCircle, CheckCircle } from 'lucide-react';

// Define a interface para um registro de manutenção
interface MaintenanceEntry {
  id: number;
  truck: string;
  type: 'Preventiva' | 'Corretiva';
  date: string; // formato 'YYYY-MM-DD'
  description: string;
  status: 'Concluída' | 'Em andamento';
  cost: string;
}

// Dados simulados do histórico de manutenção
const maintenanceHistoryData: MaintenanceEntry[] = [
  {
    id: 1,
    truck: 'ABC-1234',
    type: 'Preventiva',
    date: '2024-02-15',
    description: 'Troca de óleo e filtros',
    status: 'Concluída',
    cost: 'R$ 850,00',
  },
  {
    id: 2,
    truck: 'DEF-5678',
    type: 'Corretiva',
    date: '2024-02-20',
    description: 'Reparo no sistema de freios',
    status: 'Em andamento',
    cost: 'R$ 1.200,00',
  },

  {
    id: 3,
    truck: 'ABC-1234',
    type: 'Preventiva',
    date: '2025-02-08',
    description: 'Troca de óleo e filtros',
    status: 'Concluída',
    cost: 'R$ 5.890,00',
  },
];

const MaintenanceHistory: React.FC = () => {
  // Estado para o filtro de tipo de manutenção
  const [filtroTipo, setFiltroTipo] = useState<string>('todos');
  // Estado para o filtro de período (em formato de string, ex: "30dias")
  const [filtroPeriodo, setFiltroPeriodo] = useState<string>('30dias');

  // Função que filtra os registros com base nos filtros selecionados
  const filteredMaintenance = maintenanceHistoryData.filter((entry) => {
    // Filtro por tipo: se o filtro for "todos", aceita qualquer tipo;
    // caso contrário, compara convertendo para minúsculas.
    const typeMatch =
      filtroTipo === 'todos' || entry.type.toLowerCase() === filtroTipo;

    // Extrai o número de dias do filtro (removendo a parte "dias")
    const periodDays = parseInt(filtroPeriodo.replace('dias', ''));
    // Data atual e data da manutenção
    const today = new Date();
    const entryDate = new Date(entry.date);
    // Calcula a diferença em dias
    const diffTime = today.getTime() - entryDate.getTime();
    const diffDays = diffTime / (1000 * 3600 * 24);
    const periodMatch = diffDays <= periodDays;

    return typeMatch && periodMatch;
  });

  return (
    <div className="space-y-6">
      {/* Seção de Filtros */}
      <div className="flex flex-wrap gap-4">
        {/* Filtro de Tipo de Manutenção */}
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
        {/* Filtro por Período */}
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

      {/* Tabela do Histórico de Manutenção */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Histórico de Manutenção
          </h3>
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
                {filteredMaintenance.map((maintenance) => (
                  <tr key={maintenance.id} className="border-t border-gray-100">
                    {/* Caminhão */}
                    <td className="py-4 pr-6">{maintenance.truck}</td>
                    {/* Tipo de Manutenção */}
                    <td className="py-4 pr-6">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          maintenance.type === 'Preventiva'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-orange-100 text-orange-800'
                        }`}
                      >
                        {maintenance.type}
                      </span>
                    </td>
                    {/* Data da Manutenção */}
                    <td className="py-4 pr-6">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-gray-400 mr-1" />
                        {maintenance.date}
                      </div>
                    </td>
                    {/* Descrição */}
                    <td className="py-4 pr-6">{maintenance.description}</td>
                    {/* Status da Manutenção */}
                    <td className="py-4 pr-6">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          maintenance.status === 'Concluída'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {maintenance.status === 'Concluída' ? (
                          <CheckCircle className="w-3 h-3 mr-1" />
                        ) : (
                          <AlertCircle className="w-3 h-3 mr-1" />
                        )}
                        {maintenance.status}
                      </span>
                    </td>
                    {/* Custo */}
                    <td className="py-4">{maintenance.cost}</td>
                  </tr>
                ))}
                {filteredMaintenance.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="py-4 text-center text-sm text-gray-500"
                    >
                      Nenhum registro encontrado para os filtros selecionados.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceHistory;
