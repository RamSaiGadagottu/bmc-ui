import Container from 'react-bootstrap/Container';
import AgGrid from "../../ag-grid/AgGrid";

export default function SearchResults({data}){
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
    return(
        <Container>
            <h3><b>123 Query Results </b></h3> 

            {/* <SearchResults /> */}
            <AgGrid data={data} columnDefs={columnDefs}/>
        </Container>
    )
}