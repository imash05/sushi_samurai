import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
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
          <div className="mobile_det_middle">
            <h3>1000+</h3>
            <span>Daily order</span>
          </div>
          <div className="mobile_det">
            <h3>10+</h3>
            <span>Branches</span>
          </div>
        </div>
      </div>
      {/* about sushi samurai  */}
      <div className="about">
        <div className="about_img">
          <img
            src="https://web-assets.limewire.media/u/83e866e7-3b89-48c8-b18c-5cf766fb76b3/9b7899ac-8403-46ac-8ebe-9f6594bb96ab.d/post_image_large.jpeg"
            alt=""
          />
        </div>

        <div className="about_det">
          <h2>About Sushi Samurai</h2>
          <p>
            At restaurant Sushi Samurai We offer meals of eccelent quality and
            invite you to try delicius food The key of our success is simple
            providing quality consistent food that taste great every single
            time. eat delicius food grab a drink .But most of all,relax! We
            thank you from the bottom of our hearts for you continued support.
          </p>
          <div>
            <img src="" alt="" />
            {/*TODO: da fare dopo  */}
          </div>
        </div>
      </div>
      <div>food slider</div>
      <div>
        sezione esperienza ristorante 
      </div>
      <div>
        sezione prenotazioni 
      </div>

      <footer className="footer">
        <div className="footer_download">
          <img src="" alt="" />
          <div>
            <h3>Download the App</h3>
            <p>
              Discover food wherever and whenever and get your food delivered
              quickly.
            </p>
            <div>
              <Link></Link>
              <Link></Link>
            </div>
          </div>
          <img src="" alt="" />
        </div>
        <div className="footer_content">
          <div className="logo">
            <h3>Sushi</h3>
            <img
              src="https://png.pngtree.com/png-clipart/20220430/original/pngtree-sushi-logo-shop-png-image_7596643.png"
              alt="sushi_samurai_logo"
            />
            <h3>Samurai</h3>
          </div>
          <ul>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Order</Link>
            </li>
            <li>
              <Link>Menu</Link>
            </li>
            <li>
              <Link>Membership</Link>
            </li>
            <li>
              <Link>Download</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link>
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link>
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link>
                <FaYoutube />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
