import React from "react";

export default function Synonyms(props) {
    console.log(props.synonyms);
    if (props.synonyms) {
    return (
        <div className="Synonyms text-capitalize">
            <p><strong>Synonyms: </strong></p>
            {props.synonyms.map(function(synonyms, index) {
                return (
        <div>
            <span key={index}>{synonyms},</span>
        </div>);    
            })}
        </div>
    );
    } else {
        return null;
    }
}