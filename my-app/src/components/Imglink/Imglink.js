import React from "react";
import { Link } from "react-router-dom";

const Imglink = () => {
  const handleClick = () => {
    window.open("https://example.com", "_blank");
  };

  return (
    <div>
      <h2>Click on the image to open in a new tab:</h2>
      <Link to="/imglink" onClick={handleClick}>
        <img src="your-image-url" alt="Link to open in new tab" />
      </Link>
    </div>
  );
};

export default Imglink;
