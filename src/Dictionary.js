import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data);
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
                <input type="search" placeholder="Search" onChange={handleKeywordChange} />
                <button type="submit">Search</button>
            </form>
        </div> );
}