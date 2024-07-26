import React from "react";
import Header from "../../components/Header/Header";
import image7 from "../../components/Houses/pexels-bertellifotografia-2980955.jpg";

function ProductPage2() {
  return (
    <>
      <Header />
      <div className="product-sec">
        <div className="image-section">
          <img src={image7} alt="" />
        </div>
        <div className="text-section">
          <h2>House in India</h2>
          <h3>US $999999</h3>
          <h4>condition: Good</h4>
          <p>house was built at 2000</p>
          <div className="buttons-section">
            <button className="buyitnow">Buy it Now</button>
            <button className="addtocart">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage2;
