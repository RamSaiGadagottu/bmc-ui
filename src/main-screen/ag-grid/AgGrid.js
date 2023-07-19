import { AgGridReact } from "ag-grid-react";

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export default function AgGrid({data}){

    const rowData = [...data];

    const columnDefs = [
        {
            field:"External Id",
            valueGetter: params => params.data.MGLT
        },
        {
            field:"Document Type",
            valueGetter: params => params.data.model
        },
        {
            field:"State",
            valueGetter: params => params.data.manufacturer
        },
        {
            field:"Time Received",
            valueGetter: params => params.data.created
        },
        {
            field:"Sender",
            valueGetter: params => params.data.crew
        },
        {
            field:"Receiver",
            valueGetter: params => params.data.passengers
        },
        {
            field:"Status",
            valueGetter: params => params.data.manufacturer
        }
    ];

    return (
        <>
        <div className="ag-theme-alpine" style={{height:500}}>
            <AgGridReact 
            rowData={rowData}
            columnDefs={columnDefs}
            />
        </div>
        </>
    )
}