import React from "react";
import "./Footer.scss";
import mainLogo from "../../../images/Group 86.png";
import facebook from "../../../images/facebook-logo-in-circular-shape@2x.png";
import twitter from "../../../images/twitter (4)@2x.png";
import linkedin from "../../../images/linkedin (2)@2x.png";
import dribble from "../../../images/dribbble (1)@2x.png";

const Footer = () => {
    return (
        <>
            <div className="pt-5">
                <h1 className="font-weight-bold" style={{ fontFamily: "'Noto Serif', serif" }}>
                    Get your design right, right now
                </h1>
                <p>Be the first know our latest offers and updates!</p>
                <div class="search-container my-5 w-50 mx-auto">
                    <input type="text" className="form-control" placeholder="Enter your email address" />

                    <button className="ml-auto">Get Started</button>
                </div>

                <div className="row m-5 footer-items d-flex align-items-center">
                    <div className="col-md-3 m-5">
                        <img className="w-50" src={mainLogo} alt="" />
                        <div className="d-flex pl-5 my-4">
                            <img className="ml-3" src={facebook} alt="" />
                            <img className="ml-3" src={twitter} alt="" />
                            <img className="ml-3" src={linkedin} alt="" />
                            <img className="ml-3" src={dribble} alt="" />
                        </div>
                    </div>
                    <div className="col-md-2 text-left">
                        <ul>
                            <li>Features</li>
                            <li>Enterprise</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div className="col-md-2 text-left">
                        <ul>
                            <li>Blog</li>
                            <li>Help Center</li>
                            <li>Contact Us</li>
                            <li>Status</li>
                        </ul>
                    </div>
                    <div className="col-md-2 text-left">
                        <ul>
                            <li>About us</li>
                            <li>Terms of Service</li>
                            <li>Security</li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
