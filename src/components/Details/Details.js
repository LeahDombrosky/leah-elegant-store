import React from "react";
import './Details.css';


export default function Details (props) {
  const {title, id, img, price} = props.location.state;
  return (
    <div id="Details__container">
      <h1>
        {title.title}
      </h1>
      <div>
        {id.id}
      </div>
      <div>
        {img.img}
      </div>
      <div>
        {price.price}
      </div>
    </div>
  )
}
