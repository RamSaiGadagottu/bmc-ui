import Container from 'react-bootstrap/Container';
import AgGrid from "../../ag-grid/AgGrid";

export default function SearchResults({data}){
    return(
        <Container>
            <h3><b>123 Query Results </b></h3> 

            {/* <SearchResults /> */}
            <AgGrid data={data}/>
        </Container>
    )
}