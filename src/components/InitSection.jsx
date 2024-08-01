import React from "react";
import { Link } from "react-router-dom";

const InitSection = () => {
  return (
    <div className="home_initial_section">
      <div className="home_initial_section_left">
        <div className="circle"></div>

        <div className="content">
          <h1>
            sushi
            <img
              src="https://static.vecteezy.com/system/resources/previews/027/735/633/non_2x/sushi-platter-with-different-types-of-sushi-free-png.png"
              alt="piatto_sushi_HeadTitle"
            />
            Samurai
          </h1>
        </div>
        <div className="content_action">
          <p>Purest Sushi Experience Focusing on Premium Quality Ingredients</p>
          <Link to={""}>Check Menu</Link>
        </div>
        <span>
          <h2>寿</h2>
          <h2>司</h2>
          <h2>武</h2>
          <h2>士</h2>
        </span>
      </div>
      <div className="home_initial_section_right">
        <img src={require("../assets/3_sushi.png")} alt="" />
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default InitSection;
