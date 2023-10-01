import * as React from 'react';
import DataTable from '../../components/DataTable';
import { GridColDef } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useOrders } from '../../hooks/useApi';

const OrderManager: React.FC = () => {
  const { data: orders, isLoading } = useOrders();

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Order ID', width: 300 },
    { field: 'paid', headerName: 'Paid', type: 'boolean', width: 300 },
    { 
      field: 'productsCount', 
      headerName: 'Number of Products', 
      valueGetter: (params) => params.row.products.length, 
      width: 300 
    },
    { field: 'total', headerName: 'Total', type: 'number', width: 100 },
    {
      field: 'spacer',
      headerName: '',
      sortable: false,
      width: 50,
      renderCell: () => <></>,
    }
  ];

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box style={{ width: '80%' }} sx={{ height: 600, paddingTop: '2rem', }}>
      <Typography variant="h2" align="center" gutterBottom style={{ fontWeight: 'bold', marginBottom: '40px' }}>
           Orders List
      </Typography>
      <DataTable
        rows={orders || []}
        columns={columns}
        checkboxSelection={false}
      />
    </Box>
  );
}

export { OrderManager };
