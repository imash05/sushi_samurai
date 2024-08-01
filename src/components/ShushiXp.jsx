import React from "react";

const ShushiXp = () => {
  return (
    <div className="sushi_ex">
      <div className="imgs">
        <img
          src="https://m.media-amazon.com/images/I/71UBT9tgdGL._AC_UF1000,1000_QL80_.jpg"
          alt=""
        />
        <img
          className="floatingImg"
          src="https://m.media-amazon.com/images/I/71Tq21fHSgL._AC_UF894,1000_QL80_.jpg"
          alt=""
        />
      </div>
      <div className="xp_details">
        <h2>The Kura Experience</h2>
        <ul>
          {/* TODO:modificare il testo  */}
          <li>
            <span>01</span>
            <h3>Premium Ingredients</h3>
            <p>
              from sushi to broths and even deserts, all of our dishes are free
              of artificial sweeteners,seasonings,preservatives and colorings.
            </p>
          </li>
          <li>
            <span>02</span>
            <h3>Authentic Japanese</h3>
            <p>
              Our dishes adhere to Japanese virtue of serving natural and
              healthy meals. We use only fresh premium ingredients for a taste.
            </p>
          </li>
          <li>
            <span>03</span>
            <h3>Always Fresh & Bikkura-Pon</h3>
            <p>
              Our potented Mr. Fresh ventilated suhsi lid and plate-tracking
              tecnology ensures your food is always fresh and delicious.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShushiXp;
