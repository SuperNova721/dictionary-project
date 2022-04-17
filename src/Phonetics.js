import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {

    if(props.phonetics.audio === '') {
        return (
        (props.phonetics.text)
        );
        
    } else {
        return (
            <div className="Phonetics">
                <a className="audio-link" href={props.phonetics.audio} target="_blank" rel="noreferrer">Listen</a>    
                <br />
                {props.phonetics.text}
            </div>
    );
        }
    }