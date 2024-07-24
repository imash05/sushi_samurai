import React from "react";
import { Link } from "react-router-dom";

const BookingTable = () => {
  return (
    <div className="prenotazioni">
      <div className="prenotazioni_details">
        <h2>Reserve Your Table Now</h2>
        <p>
          There's plenty of cooking to do on Thanksgiving. so make the night
          before easy on yourself and pick up a sushi platter to feed the
          family.
        </p>
        <div className="prenotazioni_orari">
          <p>Open Hours</p>
          <ul>
            <li>
              <b>M-F:</b>b 10am - 11pm
            </li>
            <li>
              <b>S-S:</b> 09am - 11pm
            </li>
          </ul>
        </div>
        <Link to={""}>Book a table</Link>
      </div>
      <div className="img">
        <img
          src="https://g-horeca.com/images/categories/sushi-platten.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default BookingTable;
