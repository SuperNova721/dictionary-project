import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results.js";
import axios from "axios";
import ImageResults from "./ImageResults.js";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);
    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        console.log(response.data);
        setPhotos(response.data.photos);
    }

    function search() {
        let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey ="563492ad6f9170000100000189bbdc36b9ac48b291b03d56e4016a9e";
        let pexelsApiUrl =`https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
        let headers = {Authorization : `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, {headers: headers,}).then(handlePexelsResponse);
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
            <ImageResults photos={photos} />
        </div> 
        );
            
    } else {
       load();
        return ("Loading");
    }
}