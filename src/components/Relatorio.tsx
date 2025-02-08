import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

// Define a interface para cada registro de motorista
interface Motorista {
  id_motorista: number;
  nome: string;
  totalViagens: number;
  totalPedagios: number;
  caminhoesUtilizados: number;
}

const RelatorioMotorista: React.FC = () => {
  // Estado que armazena os dados dos motoristas, tipados como um array de Motorista
  const [dados, setDados] = useState<Motorista[]>([]);

  useEffect(() => {
    // Simula uma requisição para obter os dados
    // Substitua 'SUA_API_URL_AQUI' pela URL da sua API
    fetch('SUA_API_URL_AQUI')
      .then((res) => res.json())
      .then((data: Motorista[]) => setDados(data))
      .catch((err) => console.error('Erro ao carregar dados:', err));
  }, []);

  // Define as colunas da tabela, utilizando a tipagem do DataGrid do MUI
  const colunas: GridColDef[] = [
    { field: 'nome', headerName: 'Motorista', width: 150 },
    { field: 'totalViagens', headerName: 'Total de Viagens', width: 150 },
    { field: 'totalPedagios', headerName: 'Total de Pedágios', width: 150 },
    { field: 'caminhoesUtilizados', headerName: 'Caminhões Utilizados', width: 180 },
  ];

  return (
    <Box sx={{ height: 400, width: '100%', padding: 2 }}>
      {/* Título do relatório */}
      <Typography variant="h4" gutterBottom>
        Relatório de Motoristas
      </Typography>
      {/* DataGrid que exibe os dados */}
      <DataGrid
        rows={dados}
        columns={colunas}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        // Define a propriedade getRowId para identificar de forma única cada registro
        getRowId={(row: Motorista) => row.id_motorista}
      />
    </Box>
  );
};

export default RelatorioMotorista;
