import React from "react";

export default function Synonyms(props) {
    
    if (props.synonyms) {
    return (
        <div className="Synonyms text-capitalize">
            <p><strong>Synonyms: </strong></p>
            {props.synonyms.slice(0,5).map(function(synonyms, index) {
                return (
        <div>
            <span key={index}>{synonyms}</span>
        </div>);    
            })}
        </div>
    );
    } else {
        return null;
    }
}