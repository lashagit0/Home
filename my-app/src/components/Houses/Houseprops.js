import React from "react";

function houseprops(props) {
  return (
    <div className="houses-row">
      <div className="item">
        <img src={props.src} alt={props.alt} />
        <h3>{props.itemTitle}</h3>
        <p>{props.price}</p>
      </div>
    </div>
  );
}

export default houseprops;
