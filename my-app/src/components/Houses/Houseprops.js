import React from "react";

function Houseprops(props) {
  return (
    <div className="houses-row">
      <div className="item">
        <img src={props.src} alt={props.alt} />
        <div className="text-wrap">
          <h3>{props.itemTitle}</h3>
          <p>{props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Houseprops;
