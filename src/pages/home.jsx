import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import DownloadApp from "../components/DownloadApp";
import AboutSushiSamurai from "../components/AboutSushiSamurai";
import WhyUs from "../components/WhyUs";
import BookingTable from "../components/BookingTable";
import ShushiXp from "../components/ShushiXp";
import Footer from "../components/Footer";
import InitSection from "../components/InitSection";
import Header from "../components/Header";

const Home = () => {
  window.addEventListener("scroll", () => {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  return (
    <div className="layout">

      {/* header  */}
      <Header/>
      {/* initial section  */}
      <InitSection/>
      {/* why us  */}
      <WhyUs />
      {/* download app  */}
      <DownloadApp />
      {/* about sushi samurai  */}
      <AboutSushiSamurai />
      {/* food slider / menu  */}
      <div>


        <div>
          <h1>Cool uniquwe</h1>
          <Link></Link>
        </div>
        <div></div>

      </div>
      {/* esperienza del ristorante */}
      <ShushiXp />
      {/* prenotazioni  */}
      <BookingTable />
      {/* footer  */}
      <Footer/>
    </div>
  );
};

export default Home;
