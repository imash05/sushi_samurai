import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* initial section  */}
      <div className="home_initial_section">
        <div>
          <div>
            <h1>
              sushi
              <img
                src="https://static.vecteezy.com/system/resources/previews/027/735/633/non_2x/sushi-platter-with-different-types-of-sushi-free-png.png"
                alt="piatto_sushi_HeadTitle"
              />
              Samurai
            </h1>
          </div>
          <div>
            <p>Purest Sushi Experience Focusing on Premium Quality Ingredients</p>
            <Link to={''}>Check Menu</Link>
          </div>
          <span>寿司武士</span>
        </div>
        <div>
          <img src={require('../assets/3_sushi.png')} alt="" />
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Home;
