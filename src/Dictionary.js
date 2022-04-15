import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    
    return (
        <div className="Dictionary">
            <div>
            <h3>What's the word today?</h3>
            <form onSubmit={search}>
                <input type="search" placeholder="Search" onChange={handleKeywordChange} />
                <button type="submit">Search</button>
            </form>
            </div>
        </div> );
}