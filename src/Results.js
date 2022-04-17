import React from "react";
import "./Results.css";
import Synonyms from "./Synonyms.js";
import Phonetics from "./Phonetics.js";

export default function Results(props) {
    console.log(props.results);

    if (props.results) {
        return (
            <div className="Results">
                <h2 className="text-capitalize">{props.results.word}</h2>
                <Phonetics phonetics={props.results.phonetics[0]}/>
                
                {/*Several words found using API result in blank screen. This requires user to have to refresh the page and find alternate word.*/}
                <div className="definitions">
                    <div className="noun">
                        <h4>{props.results.meanings[0].partOfSpeech}:</h4>
                        <p><strong>Definition: </strong> {props.results.meanings[0].definitions[0].definition}</p>
                        <p><strong>Example: </strong>{props.results.meanings[0].definitions[0].example}</p>
                        {" "}
                        <Synonyms synonyms={props.results.meanings[0].synonyms} />
                        
                    </div>
                    
                    {/*Not all words have "verb" definitions*/ }
                    <div className="verb">
                        <h4>{props.results.meanings[1].partOfSpeech}:</h4>
                        <p><strong>Definition: </strong>{props.results.meanings[1].definitions[0].definition}</p>
                    </div>
                </div>
            </div>
        );
    } 
}