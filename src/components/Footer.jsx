import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_download">
          <img
            className="footerLimg"
            src="https://pngimg.com/d/sushi_PNG98815.png"
            alt=""
          />
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
          <img
            className="footerRimg"
            src={require("../assets/sus.png")}
            alt=""
          />
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
  )
}

export default Footer