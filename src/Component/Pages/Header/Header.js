import React from 'react';
import logo from '../../../image/icons/logo.png';
import banner from '../../../image/banners/header-banner.png';
import './Header.scss';

const Header = () => {
    return (
        <section className="header-section">
        <nav className="navbar navbar-expand-lg bg-light container">
            <a className="navbar-brand" href="#a"><img src={logo} alt=""/></a>
            <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                <a className="nav-link" href="#b">Home</a>
                <a className="nav-link" href="#c">About</a>
                <a className="nav-link" href="#d">Services</a>
                <a className="nav-link" href="#e">Pricing</a>
                <a className="nav-link" href="#f">Our Team</a>
                <a className="nav-link link-btn small-btn btn px-3" href="#g">Contact us</a>
              </div>
            </div>
          </nav>
          <header className="py-3 container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-md-6 p-3">
                <h1>Florence Agency</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque praesentium tenetur earum inventore! Alias dolore at quasi. Deleniti, quae! Sequi!</p>
                <button className="btn small-btn">See Pricing</button>
              </div>
              <div className="col-md-6 p-3">
                <img src={banner} alt=""/>
              </div>
            </div>
          </header>
    </section>

    );
};

export default Header;