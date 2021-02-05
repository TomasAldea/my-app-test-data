
import React from "react";

export function Hero (props) {
    return(
        <>
        <div>
             <p>{props.title}</p> 
             <p>{props.subtitle}</p> 
             <div>{props.img.src} {props.img.alt}</div>
        </div>
        </>
    )
}