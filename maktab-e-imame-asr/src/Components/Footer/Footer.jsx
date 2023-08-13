import React from "react";
import style from "../Footer/Footer.css";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  return (
    <div className="new_footer_main">
      <div className="footer_main">
        <div className="footer_heading">
          <h1>ACADEMIA</h1>
          <p className="footer_sub">ONLINE EDUCATION & LEARNING</p>
          <p className="footer_sub_detail">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>

          <div className="social1">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div>
        </div>
        <div className="footer_explore">
          <h3>Explore</h3>
          <p>About Us</p>
          <p>Services</p>
          <p>Courses</p>
          <p>Blog</p>
          <p>Contact us</p>
        </div>
        <div className="footer_details">
          <h3>Have a Questions?</h3>
          <div className="footer_logo_details">
            <div>
              <FaMapLocationDot className="footer_logo_icon" />
              <p>203 Fake St. Mountain View</p>
            </div>
          </div>

          <div className="footer_logo_details">
            <div>
              <IoCall className="footer_logo_icon" />
              <p>+2 392 3929 210</p>
            </div>
          </div>

          <div className="footer_logo_details">
            <div>
              <SiMinutemailer className="footer_logo_icon" />
              <p>info@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p>Copyright ©2023 All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
