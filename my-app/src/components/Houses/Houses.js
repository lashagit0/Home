import React from "react";
import "./houses.css";
import Houseprops from "./Houseprops";
import image1 from "./pexels-pixabay-210538.jpg";
import image2 from "./pexels-pixabay-208736.jpg";
import image3 from "./pexels-pixasquare-1115804.jpg";
import image4 from "./pexels-pixabay-280229.jpg";
import image5 from "./pexels-betchtyblades-2480608.jpg";
import image6 from "./pexels-sebastian-palomino-933481-1862402.jpg";
import image7 from "./pexels-bertellifotografia-2980955.jpg";
import image8 from "./pexels-photo-3184433.jpeg";

const Houses = () => {
  return (
    <div className="row-wrapper">
      <div className="houses-sec">
        <Houseprops src={image1} itemTitle="Big House" price="1000000$" />
        <Houseprops src={image2} itemTitle="Big House" price="1000000$" />
        <Houseprops src={image3} itemTitle="Big House" price="1000000$" />
        <Houseprops src={image4} itemTitle="Big House" price="1000000$" />
      </div>
      <div className="houses-sec">
        <Houseprops src={image5} itemTitle="Big House" price="1000000$" />
        <Houseprops src={image6} itemTitle="Big House" price="1000000$" />
        <Houseprops src={image7} itemTitle="Big House" price="1000000$" />
        <Houseprops src={image8} itemTitle="Big House" price="1000000$" />
      </div>
    </div>
  );
};

export default Houses;
