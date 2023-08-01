import SearchBar from "./SearchBar/SearchBar";
import { useEffect, useState } from "react";
import axios from 'axios';
import SearchResults from "./SearchResults/SearchResults";
import DocumentDetails from "./DocumentDetails/DocumentDetails";

export default function Search(){

    const [docs, setDocs] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships').then( res =>{
            console.log('Star Wars Data',res.data.results);
            setDocs(res.data.results);
        })
    },[])
    return(
        <>
        <SearchBar />
        <div style={{padding:'20px'}}></div>
        {<SearchResults data={docs}/>}

        <DocumentDetails />
        </>
    )
}