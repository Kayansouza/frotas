import React from 'react';
import { 
  Truck, 
  Wrench, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  Heart,
  MapPin,
  BarChart,
  Calendar,
  Coffee,
  AlertCircle
} from 'lucide-react';

const stats = [
  { 
    title: 'Total de Caminhões',
    value: '48',
    icon: <Truck className="w-6 h-6 text-blue-600" />,
    change: '+2 este mês'
  },
  {
    title: 'Em Operação',
    value: '32',
    icon: <Clock className="w-6 h-6 text-green-600" />,
    change: '67% da frota'
  },
  {
    title: 'Em Manutenção',
    value: '8',
    icon: <Wrench className="w-6 h-6 text-orange-600" />,
    change: '16% da frota'
  },
  {
    title: 'Disponíveis',
    value: '8',
    icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
    change: '17% da frota'
  }
];

const recentActivity = [
  { 
    id: 1, 
    truck: 'ABC-1234', 
    driver: 'João Silva', 
    type: 'Entrada', 
    time: '10:30',
    location: 'São Paulo, SP',
    status: 'Em viagem',
    horasDirigidas: '6h30',
    descanso: '2h',
    bemEstar: 'Bom'
  },
  // ... outros registros
];

const alertas = [
  {
    id: 1,
    tipo: 'Manutenção',
    mensagem: 'Troca de óleo necessária - ABC-1234',
    urgencia: 'alta'
  },
  {
    id: 2,
    tipo: 'Descanso',
    mensagem: 'Motorista próximo ao limite de horas - João Silva',
    urgencia: 'média'
  }
];

function DashboardContent() {
  const [filtroStatus, setFiltroStatus] = React.useState('todos');
  const [filtroLocalizacao, setFiltroLocalizacao] = React.useState('todas');

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="mt-2 text-3xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">{stat.icon}</div>
            </div>
            <p className="mt-2 text-sm text-gray-600">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Alertas e Notificações */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Alertas e Notificações</h3>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Ver todos
          </button>
        </div>
        <div className="space-y-4">
          {alertas.map((alerta) => (
            <div 
              key={alerta.id}
              className={`p-4 rounded-lg border ${
                alerta.urgencia === 'alta' 
                  ? 'bg-red-50 border-red-100' 
                  : 'bg-yellow-50 border-yellow-100'
              }`}
            >
              <div className="flex items-start">
                <AlertCircle className={`w-5 h-5 ${
                  alerta.urgencia === 'alta' ? 'text-red-600' : 'text-yellow-600'
                }`} />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{alerta.tipo}</p>
                  <p className="mt-1 text-sm text-gray-600">{alerta.mensagem}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            value={filtroStatus}
            onChange={(e) => setFiltroStatus(e.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2"
          >
            <option value="todos">Todos</option>
            <option value="em_viagem">Em Viagem</option>
            <option value="em_descanso">Em Descanso</option>
            <option value="manutencao">Em Manutenção</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Localização
          </label>
          <select
            value={filtroLocalizacao}
            onChange={(e) => setFiltroLocalizacao(e.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2"
          >
            <option value="todas">Todas</option>
            <option value="sp">São Paulo</option>
            <option value="rj">Rio de Janeiro</option>
            <option value="mg">Minas Gerais</option>
          </select>
        </div>
      </div>

      {/* Monitoramento em Tempo Real */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monitoramento em Tempo Real</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-gray-500">
                  <th className="pb-4 pr-6">Caminhão</th>
                  <th className="pb-4 pr-6">Motorista</th>
                  <th className="pb-4 pr-6">Status</th>
                  <th className="pb-4 pr-6">Localização</th>
                  <th className="pb-4 pr-6">Horas Dirigidas</th>
                  <th className="pb-4 pr-6">Descanso</th>
                  <th className="pb-4 pr-6">Bem-estar</th>
                  <th className="pb-4">Ações</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {recentActivity.map((activity) => (
                  <tr key={activity.id} className="border-t border-gray-100">
                    <td className="py-4 pr-6">{activity.truck}</td>
                    <td className="py-4 pr-6">{activity.driver}</td>
                    <td className="py-4 pr-6">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {activity.status}
                      </span>
                    </td>
                    <td className="py-4 pr-6">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-gray-400 mr-1" />
                        {activity.location}
                      </div>
                    </td>
                    <td className="py-4 pr-6">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-gray-400 mr-1" />
                        {activity.horasDirigidas}
                      </div>
                    </td>
                    <td className="py-4 pr-6">
                      <div className="flex items-center">
                        <Coffee className="w-4 h-4 text-gray-400 mr-1" />
                        {activity.descanso}
                      </div>
                    </td>
                    <td className="py-4 pr-6">
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 text-gray-400 mr-1" />
                        {activity.bemEstar}
                      </div>
                    </td>
                    <td className="py-4">
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                        Detalhes
                      </button>
                    </td>
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

export default DashboardContent;