import { AgGridReact } from "ag-grid-react";

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export default function AgGrid({data,columnDefs}){

    const rowData = [...data];

    return (
        <>
        <div className="ag-theme-alpine" style={{height:500,width:'100%'}}>
            <AgGridReact 
            rowData={rowData}
            columnDefs={columnDefs}
            />
        </div>
        </>
    )
}