import React from 'react';
import { Meta, Story } from '@storybook/react';
import DataTable, { DataTableProps } from './components/DataTable';

// Sample data to be used for story
const sampleColumns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 200 }
];

const sampleRows = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Doe' }
];

export default {
  title: 'Components/DataTable',
  component: DataTable,
  argTypes: {
    // Add controls and actions if needed
    onRowSelectionModelChange: { action: 'row selection changed' }
  }
} as Meta;

const Template: Story<DataTableProps<unknown>> = (args) => <DataTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  rows: sampleRows,
  columns: sampleColumns
};

export const WithCheckboxSelection = Template.bind({});
WithCheckboxSelection.args = {
  ...Default.args,
  checkboxSelection: true
};

export const WithDeleteAction = Template.bind({});
WithDeleteAction.args = {
  ...WithCheckboxSelection.args,
  deleteAction: {
    handleDelete: () => console.log('Delete triggered from story'),
    isDisabled: false
  }
};
