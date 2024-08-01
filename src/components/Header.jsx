import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
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
  );
};

export default Header;
