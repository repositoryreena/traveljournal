import React from "react"
import data from "./data"

export default function Place({title, location, googleMapsUrl, startDate, endDate, description, imageUrl}) {
    return (
    <div>
    

    
    {data.map(item => (
        <>
        <p>{item.location}</p>
        <a href={item.googleMapsUrl}>View on google maps</a>
        <h1>{item.title}</h1>
        </>
    ))}
    
    </div>
    )
}

