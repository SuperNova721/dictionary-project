import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results.js";
import axios from "axios";


export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        console.log(response.data);
        setResults(response.data[0]);
    }

    function search() {
        let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }
    
    if (loaded) {
    return (
        <div className="Dictionary">
            <h3>What's the word today?</h3>
            <form onSubmit={handleSubmit}>
                <input type="search" placeholder="Search" onChange={handleKeywordChange} autoFocus/>
                <button type="submit">Search</button>
            </form>
            <Results results={results}/>
        </div> 
        );
            
    } else {
       load();
        return ("Loading");
    }
}