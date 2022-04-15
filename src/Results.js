import React from "react";
import "./Results.css";

export default function Results(props) {
    console.log(props.results);

    if (props.results) {
        return (
            <div className="Results">
                <div className="container">
                <h2 className="text-capitalize">{props.results.word}</h2>
                
                {/*Several words found using API result in blank screen. This requires user to have to refresh the page and find alternate word.*/}
                
                <div className="definitions">
                    <div className="noun">
                        <h4>{props.results.meanings[0].partOfSpeech}:</h4>
                        <p>{props.results.meanings[0].definitions[0].definition}</p>
                        <p>{props.results.meanings[0].definitions[0].example}</p>
                    </div>
                    
                    {/*Not all words have "verb" definitions*/ }
                    <div className="verb">
                        <h4>{props.results.meanings[1].partOfSpeech}:</h4>
                        <p>{props.results.meanings[1].definitions[0].definition}</p>
                    </div>
                </div>
                </div>
            </div>
        );
    } else {
    return (
        <div className="results-not-found">
            <h2>Lame, your word was not found!</h2>
            <h3>Please Refresh the page, check your spelling and try again. </h3>
            <img src="https://www.iconpacks.net/icons/2/free-sad-face-icon-2691-thumb.png" alt="sad face" width="100"></img>
        </div>
    );
}
}