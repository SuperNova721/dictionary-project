import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results.js";
import axios from "axios";


export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);
    
        let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

        axios.get(apiUrl).then(handleResponse);

    }

    

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    
    
    return (
        <div className="Dictionary">
            <h3>What's the word today?</h3>
            <form onSubmit={search}>
                <input type="search" placeholder="Search" onChange={handleKeywordChange} autoFocus/>
                <button type="submit">Search</button>
            </form>
            <Results results={results}/>
        </div> 
        );
            
    }
