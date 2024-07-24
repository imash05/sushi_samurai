import React from "react";
import { Link } from "react-router-dom";

const DownloadApp = () => {
  return (
    <div className="section_mobileapp">
      <div className="app_download">
        <h2>All You Need in One App</h2>
        <Link to={""}>Download</Link>
      </div>
      <div className="mobile_img">
        <img src={require("../assets/mobile.png")} alt="sushisamurai_mobile" />
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
  );
};

export default DownloadApp;
