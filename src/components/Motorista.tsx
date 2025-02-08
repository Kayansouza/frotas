import { useState } from "react";

const Motoristas = () => {
  const [motoristaAtivo, setMotoristaAtivo] = useState(null);

  const motoristas = [
    { id: 1, nome: "Carlos Silva", idade: 45, experiência: "10 anos" },
    { id: 2, nome: "Maria Souza", idade: 38, experiência: "7 anos" },
    { id: 3, nome: "João Mendes", idade: 50, experiência: "15 anos" }
  ];

  const toggleDetalhes = (id) => {
    setMotoristaAtivo(motoristaAtivo === id ? null : id);
  };

  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="py-2 px-4 border">Nome</th>
          <th className="py-2 px-4 border">Ações</th>
        </tr>
      </thead>
      <tbody>
        {motoristas.map((motorista) => (
          <tr key={motorista.id} className="border">
            <td className="py-4 px-4">{motorista.nome}</td>
            <td className="py-4 px-4">
              <button
                onClick={() => toggleDetalhes(motorista.id)}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Detalhes
              </button>
              {motoristaAtivo === motorista.id && (
                <div className="mt-2 p-2 border rounded bg-gray-100">
                  <p><strong>Idade:</strong> {motorista.idade}</p>
                  <p><strong>Experiência:</strong> {motorista.experiência}</p>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Motoristas;
