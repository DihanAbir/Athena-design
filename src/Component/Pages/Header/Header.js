import React from "react";
import logo from "../../../image/icons/logo.png";
import banner from "../../../image/banners/header-banner.png";
import "./Header.scss";

const Header = () => {
    return (
        <section className="header-section">
            <nav className="navbar navbar-expand-lg container">
                <a className="navbar-brand" href="#a">
                    <img src={logo} alt="" />
                </a>
                <button
                    className="navbar-toggler navbar-light"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-link" href="#b">
                            Home
                        </a>
                        <a className="nav-link" href="#about">
                            About
                        </a>
                        <a className="nav-link" href="#services">
                            Services
                        </a>
                        <a className="nav-link" href="#pricing">
                            Pricing
                        </a>
                        <a className="nav-link" href="#f">
                            Our Team
                        </a>
                        <a className="nav-link link-btn small-btn btn px-3" href="#g">
                            Contact us
                        </a>
                    </div>
                </div>
            </nav>
            <header className="m-5 p-5 header-main">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-6 p-3 text-left">
                        <h1
                            className="font-weight-bold"
                            style={{ fontFamily: "'Noto Serif', serif", fontSize: "5rem" }}
                        >
                            Florence <br /> agency
                        </h1>
                        <p className="text-secondary">
                            Lorem Ipsum has been the industry's standard dummy text ever <br />
                            since the 1500s, when an unknown printer took a galley of type and <br />
                            scrambled it to make a type specimen book.
                        </p>
                        <button className="btn small-btn">See Pricing</button>
                    </div>
                    <div className="col-md-6 p-3">
                        <img src={banner} alt="" />
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Header;
