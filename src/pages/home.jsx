import React from "react";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  window.addEventListener("scroll", () => {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  return (
    <div className="layout">
      {/* initial section  */}
      <header className="header">
        <div className="logo">
          <h3>Sushi</h3>
          <img
            src="https://png.pngtree.com/png-clipart/20220430/original/pngtree-sushi-logo-shop-png-image_7596643.png"
            alt="sushi_samurai_logo"
          />
          <h3>Samurai</h3>
        </div>
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/menu"}>This month's menu</NavLink>
          <NavLink to={"/rv"}>Reservation</NavLink>
        </nav>
        <Link className="nav_action_link" to={""}>
          Contact
        </Link>
      </header>
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
            <p>
              Purest Sushi Experience Focusing on Premium Quality Ingredients
            </p>
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

      <div className="section_why_us">
        <h2>Why Sushi Samurai?</h2>
        <div className="card_list">
          <div className="card">
            <img
              src="https://static.vecteezy.com/system/resources/previews/027/141/482/original/plate-of-sushi-created-with-generative-ai-png.png"
              alt=""
            />
            <h4>Hot Deals & Offers</h4>
            <p>
              we want to show you same YO!love by giving you dicount off food in
              our restaurant
            </p>
          </div>
          <div className="card">
            <img
              src="https://png.pngtree.com/png-vector/20240127/ourmid/pngtree-man-holding-plate-of-maki-rolls-invites-to-dine-in-japanese-png-image_11555263.png"
              alt=""
            />
            <h4>Hot Deals & Offers</h4>
            <p>
              we want to show you same YO!love by giving you dicount off food in
              our restaurant
            </p>
          </div>
          <div className="card">
            <img
              src="https://static.vecteezy.com/system/resources/previews/008/477/701/non_2x/asian-delivery-man-file-png.png"
              alt=""
            />
            <h4>Hot Deals & Offers</h4>
            <p>
              we want to show you same YO!love by giving you dicount off food in
              our restaurant
            </p>
          </div>
        </div>
      </div>
      <div className="section_mobileapp">
        <div className="app_download">
          <h2>All You Need in One App</h2>
          <Link to={""}>Download</Link>
        </div>
        <div className="mobile_img">
          <img
            src={require("../assets/mobile.png")}
            alt="sushisamurai_mobile"
          />
          <div className="img_bg_circle"></div>
          <div className="img_bg_circle_middle"></div>
          <div className="img_bg_circle"></div>
        </div>
        <div className="section_mobileapp_details">
          <div className="mobile_det">
            <h3>85+</h3>
            <span>Sushi Iteam</span>
          </div>
          <div className="mobile_det">
            <h3>1000+</h3>
            <span>Daily order</span>
          </div>
          <div className="mobile_det">
            <h3>10+</h3>
            <span>Branches</span>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Home;
