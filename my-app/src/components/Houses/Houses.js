import React from "react";
import "./houses.css";
import Houseprops from "./Houseprops";
import image1 from "./w560x373.jpg";
import image2 from "./pexels-pixabay-208736.jpg";
import image3 from "./pexels-pixasquare-1115804.jpg";
import image4 from "./pexels-pixabay-280229.jpg";
import image5 from "./4f31bea77eef0f4a8400a2da3b7e327e.jpg";
import image6 from "./pooolhouse.jpeg";
import image7 from "./pexels-bertellifotografia-2980955.jpg";
import image9 from "./modernhouse.jpg";

const Houses = () => {
  return (
    <div className="row-wrapper">
      <h2 className="houses-txt">Houses</h2>
      <div className="houses-sec">
        <Houseprops src={image1} itemTitle="House in Texas" price="1000000$" />
        <Houseprops
          src={image2}
          itemTitle="Mansion in Hawaii"
          price="1000000$"
        />
        <Houseprops src={image3} itemTitle="House in Italy" price="1000000$" />
        <Houseprops
          src={image4}
          itemTitle="House in Washington"
          price="1000000$"
        />
      </div>
      <div className="houses-sec">
        <Houseprops
          src={image5}
          itemTitle="House in Switzerland"
          price="1000000$"
        />
        <Houseprops src={image6} itemTitle="House in Norway" price="1000000$" />
        <Houseprops src={image7} itemTitle="House in India" price="1000000$" />
        <Houseprops
          src={image9}
          itemTitle="House in Ireland"
          price="1000000$"
        />
      </div>
    </div>
  );
};

export default Houses;
