import React from 'react';
import ActionButton from './ActionButton';
import { Product } from '../types/types';
import DataTable from './DataTable';
import { GridColDef, GridRowId } from '@mui/x-data-grid';


interface ProductDataTableProps {
    products: Product[];
    onRowSelectionChange: (newSelection: GridRowId[]) => void;
    selectedProducts: string[];
    onDelete: () => void;
}
  

const ProductDataTable: React.FC<ProductDataTableProps> = ({ products, onRowSelectionChange, selectedProducts, onDelete }) => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 300 },
    { field: 'name', headerName: 'Product Name', width: 200 },
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'price', headerName: 'Price', type: 'number', width: 100 },
    {
      field: 'spacer',
      headerName: '',
      sortable: false,
      width: 50,
      renderCell: () => <></>,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => <ActionButton productId={params.row.id as string} />,
    },
  ];

  return (
    <DataTable
      rows={products}
      columns={columns}
      onRowSelectionModelChange={onRowSelectionChange}
      checkboxSelection
      deleteAction={{
        handleDelete: onDelete,
        isDisabled: selectedProducts.length === 0
      }}
    />
  );
}

export default ProductDataTable;
