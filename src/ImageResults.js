import React from "react";
import "./ImageResults.css";

export default function ImageResults(props) {
    if (props.photos) {
        console.log(props.photos);
    return (
        <div className="ImageResults">
            <div className="row">
                {props.photos.map(function(photo, index) {
                    return (
                         <div className="col-3" key={index}>
                            <img src={photo.src.tiny} className="img-fluid" alt={props.photos[0].alt}></img>
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