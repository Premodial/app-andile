import * as React from 'react';
import { DataGrid, GridToolbarContainer, GridRowId, GridColDef, GridToolbar } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface DeleteAction {
  handleDelete: () => void;
  isDisabled: boolean;
}

export interface DataTableProps<T> {
  rows: T[];
  columns: GridColDef[];
  onRowSelectionModelChange?: (selection: GridRowId[]) => void;
  actionsComponent?: React.ReactNode;
  checkboxSelection?: boolean;
  deleteAction?: DeleteAction;
}

const DataTable = <T,>({
  rows,
  columns,
  onRowSelectionModelChange,
  actionsComponent,
  checkboxSelection = false,
  deleteAction
}: DataTableProps<T>): JSX.Element => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#000',
      },
    },
  });

  return (
     <ThemeProvider theme={theme}>
      <DataGrid 
        rows={rows}
        columns={columns}
        slots={{
          toolbar: () => (
            <GridToolbarContainer sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <GridToolbar />
              {actionsComponent}
              {deleteAction && <Button
                color="secondary"
                variant="outlined"
                onClick={deleteAction.handleDelete}
                disabled={deleteAction.isDisabled}
              >
                Delete Selected
              </Button>}
            </GridToolbarContainer>
          )
        }}
        checkboxSelection={checkboxSelection}
        disableRowSelectionOnClick
        onRowSelectionModelChange={onRowSelectionModelChange}
      />
  </ThemeProvider>
  );
};

export default DataTable;
