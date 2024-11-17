import React from "react";
import data from "./data";
import "./style.css";

export default function Place({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}) {
  return (
    <div>
      {data.map((item) => (
        <div className="container">
          
            <img src={item.imageUrl} alt={item.title} />
            <div>
            <span>
              <span>{item.location.toUpperCase()}</span>
              <a href={item.googleMapsUrl}>View on google maps</a>
            </span>
            <h1>{item.title}</h1>
            <strong>
              {item.startDate} - {item.endDate}
            </strong>
            <p>{item.description}</p>
          </div>
          </div>
          
        
      ))}
    </div>
  );
}
