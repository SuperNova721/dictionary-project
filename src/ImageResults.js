import React from "react";
import "./ImageResults.css";

export default function ImageResults(props) {
    if (props.photos) {
        console.log(props.photos);
    return (
        <div className="ImageResults">
            <div className="row justify-content-between">
                
                {props.photos.map(function(photo, index) {
                    console.log(photo);
                    return (
                        <div className="col-6" key={index}>
                            <a href={photo.src.original} target="_blank" rel="noreferrer">
                                <img src={photo.src.tiny} className="img-fluid" alt={props.photos[0].alt}></img>
                            </a>
                        </div>
                    );
                })}
                
                
            </div>
        </div>   
    );
    
    } else {
    return null;
    }
}