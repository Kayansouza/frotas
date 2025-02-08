const MotoristaDetalhes = ({ motorista, fecharDetalhes }) => {
  return (
    <div className="mt-2 p-4 border rounded bg-gray-100">
      <p><strong>Idade:</strong> {motorista.idade}</p>
      <p><strong>Experiência:</strong> {motorista.experiência}</p>
      <button onClick={fecharDetalhes} className="text-red-500 mt-2">
        Fechar
      </button>
    </div>
  );
};

export default MotoristaDetalhes;
