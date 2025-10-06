import { AllCommunityModule, ModuleRegistry, themeMaterial } from 'ag-grid-community';
import { AgGridReact } from "ag-grid-react";
import styled from "styled-components";

import { ActionsCellRenderer } from "./components/ActionsCellRenderer";
import { ProgressBarCellRenderer } from "./components/ProgressBarCellRenderer";
import { StatusCellRenderer } from "./components/StatusCellRenderer";
import { TagCellRenderer } from "./components/TagCellRenderer";

ModuleRegistry.registerModules([AllCommunityModule]);

const AgGridContainer = styled.div`
  height: calc(100% - 50px);
  width: 100%;
`;

const components = {
  actionsCellRenderer: ActionsCellRenderer,
  statusCellRenderer: StatusCellRenderer,
  tagCellRenderer: TagCellRenderer,
  progressBarCellRenderer: ProgressBarCellRenderer,
};

function Table({ columnDefs, rowData }) {

  const defaultColDef = {
    suppressHeaderFilterButton: true
  };

  const myTheme = themeMaterial.withParams({
    headerTextColor: '#1f252e',
    headerFontWeight: '600',
    headerFontFamily: 'Roboto, sans-serif',
    headerFontSize: '15px',
  });

  return (
    <AgGridContainer>
      <AgGridReact
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowData={rowData}
        theme={myTheme}
        components={components}
      />
    </AgGridContainer>
  );
}

export { Table };