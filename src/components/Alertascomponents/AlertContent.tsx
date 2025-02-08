// AlertasComponent.tsx
import React, { useState } from 'react';

// Definindo uma interface para o objeto de alerta
interface Alerta {
  id: number;
  tipo: string;
  mensagem: string;
  urgencia: string;
}

// Array de alertas com tipagem
const alertas: Alerta[] = [
  {
    id: 1,
    tipo: 'Manutenção',
    mensagem: 'Troca de óleo necessária - ABC-1234',
    urgencia: 'alta',
  },
  {
    id: 2,
    tipo: 'Descanso',
    mensagem: 'Motorista próximo ao limite de horas - João Silva',
    urgencia: 'média',
  },
  {
    id: 4,
    tipo: 'Troca de Pneu',
    mensagem: 'Motorista com o pneu do lado esquerdo furado - Douglas Silva',
    urgencia: 'urgente',
  },
  {
    id: 5,
    tipo: 'Troca de Óleo',
    mensagem: 'Motorista precisa trocar o óleo - Luiz Santana',
    urgencia: 'razoável',
  },
  {
    id: 6,
    tipo: 'Horário de Almoço',
    mensagem: 'Motorista no horário de almoço - Manoel do Nascimento',
    urgencia: 'média',
  },
];

// Componente funcional com tipagem React.FC (Functional Component)
const AlertasComponent: React.FC = () => {
  // Estado para controlar se serão exibidos todos os alertas ou apenas os dois primeiros
  const [mostrarTodos, setMostrarTodos] = useState<boolean>(false);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
      {/* Título do componente */}
      <h2 className="text-lg font-bold mb-4">Alertas</h2>

      {/* Renderiza uma parte dos alertas (dois ou todos, dependendo do estado) */}
      {alertas.slice(0, mostrarTodos ? alertas.length : 2).map((alerta) => (
        <div key={alerta.id} className="mb-3 p-3 bg-white rounded-lg shadow">
          {/* Tipo do alerta */}
          <h3 className="text-md font-semibold">{alerta.tipo}</h3>
          {/* Mensagem do alerta */}
          <p className="text-gray-600">{alerta.mensagem}</p>
          {/* Urgência do alerta */}
          <span className="text-sm text-red-500 font-semibold">{alerta.urgencia}</span>
        </div>
      ))}

      {/* Botão para alternar entre exibir todos ou apenas os dois primeiros alertas */}
      <button
        onClick={() => setMostrarTodos(!mostrarTodos)}
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
      >
        {mostrarTodos ? 'Ver menos' : 'Ver todos'}
      </button>
    </div>
  );
};

export default AlertasComponent;
