import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const RelatorioMotorista = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    // Simula uma requisição para obter os dados
    fetch('/api/relatorios/motorista') // Substituir com sua API
      .then((res) => res.json())
      .then((data) => setDados(data))
      .catch((err) => console.error('Erro ao carregar dados:', err));
  }, []);

  const colunas = [
    { field: 'nome', headerName: 'Motorista', width: 150 },
    { field: 'totalViagens', headerName: 'Total de Viagens', width: 150 },
    { field: 'totalPedagios', headerName: 'Total de Pedágios', width: 150 },
    { field: 'caminhoesUtilizados', headerName: 'Caminhões Utilizados', width: 180 },
  ];

  return (
    <Box sx={{ height: 400, width: '100%', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Relatório de Motoristas
      </Typography>
      <DataGrid
        rows={dados}
        columns={colunas}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        getRowId={(row) => row.id_motorista} // Define a chave única para cada linha
      />
    </Box>
  );
};

export default RelatorioMotorista;
