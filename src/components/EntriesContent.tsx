import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const drivers = [
  'João Silva',
  'Maria Santos',
  'Pedro Costa',
  'Ana Oliveira',
];

const trucks = [
  'ABC-1234',
  'DEF-5678',
  'GHI-9012',
  'JKL-3456',
];

const entries = [
  { id: 1, date: '2024-02-28', time: '10:30', truck: 'ABC-1234', driver: 'João Silva', type: 'Entrada', notes: 'Carregamento concluído' },
  { id: 2, date: '2024-02-28', time: '11:15', truck: 'DEF-5678', driver: 'Maria Santos', type: 'Saída', notes: 'Entrega programada' },
  { id: 3, date: '2024-02-28', time: '12:00', truck: 'GHI-9012', driver: 'Pedro Costa', type: 'Entrada', notes: 'Manutenção realizada' },
];

function EntriesContent() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    truck: '',
    driver: '',
    type: 'Entrada',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setShowForm(false);
    setFormData({
      date: '',
      time: '',
      truck: '',
      driver: '',
      type: 'Entrada',
      notes: '',
    });
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">Registro de Entrada e Saída</h2>
        <button
          onClick={() => setShowForm(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Novo Registro
        </button>
      </div>

      {/* Entry Form */}
      {showForm && (
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Data</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Hora</label>
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Caminhão</label>
                <select
                  value={formData.truck}
                  onChange={(e) => setFormData({ ...formData, truck: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  required
                >
                  <option value="">Selecione um caminhão</option>
                  {trucks.map((truck) => (
                    <option key={truck} value={truck}>{truck}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Motorista</label>
                <select
                  value={formData.driver}
                  onChange={(e) => setFormData({ ...formData, driver: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  required
                >
                  <option value="">Selecione um motorista</option>
                  {drivers.map((driver) => (
                    <option key={driver} value={driver}>{driver}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Tipo</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  required
                >
                  <option value="Entrada">Entrada</option>
                  <option value="Saída">Saída</option>
                </select>
              </div>
              <div className="md:col-span-2 lg:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Observações</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  rows={3}
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Entries Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-gray-500">
                  <th className="pb-4 pr-6">Data</th>
                  <th className="pb-4 pr-6">Hora</th>
                  <th className="pb-4 pr-6">Caminhão</th>
                  <th className="pb-4 pr-6">Motorista</th>
                  <th className="pb-4 pr-6">Tipo</th>
                  <th className="pb-4">Observações</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {entries.map((entry) => (
                  <tr key={entry.id} className="border-t border-gray-100">
                    <td className="py-4 pr-6">{entry.date}</td>
                    <td className="py-4 pr-6">{entry.time}</td>
                    <td className="py-4 pr-6">{entry.truck}</td>
                    <td className="py-4 pr-6">{entry.driver}</td>
                    <td className="py-4 pr-6">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                          ${entry.type === 'Entrada' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}
                      >
                        {entry.type}
                      </span>
                    </td>
                    <td className="py-4">{entry.notes}</td>
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

export default EntriesContent;