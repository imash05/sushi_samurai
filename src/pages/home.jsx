import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import DownloadApp from "../components/DownloadApp";
import AboutSushiSamurai from "../components/AboutSushiSamurai";
import WhyUs from "../components/WhyUs";
import BookingTable from "../components/BookingTable";

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

      {/* why us  */}
      <WhyUs />
      {/* download app  */}
      <DownloadApp />
      {/* about sushi samurai  */}
      <AboutSushiSamurai />
      <div>food slider</div>

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
                from sushi to broths and even deserts, all of our dishes are
                free of artificial sweeteners,seasonings,preservatives and
                colorings.
              </p>
            </li>
            <li>
              <span>02</span>
              <h3>Authentic Japanese</h3>
              <p>
                Our dishes adhere to Japanese virtue of serving natural and
                healthy meals. We use only fresh premium ingredients for a
                taste.
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

      {/* prenotazioni  */}
      <BookingTable />

      <footer className="footer">
        <div className="footer_download">
          <img className="footerLimg" src="https://pngimg.com/d/sushi_PNG98815.png" alt="" />
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
          <img className="footerRimg" src={require('../assets/sus.png')} alt="" />
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
