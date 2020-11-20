import React from "react";
import banner from "../../../image/banners/contact-banner.png";
import "./Project.scss";

const Project = () => {
    return (
        <div className="container">
            <div className="row banner-section">
                <div className="col-6">
                    <div className="img">
                        <img className="img-fluid" src={banner} alt="" />
                    </div>
                </div>
                <div className="col-6 project-description d-flex align-items-center">
                    <div className="text-left">
                        <h1 className="font-weight-bold" style={{ fontFamily: "'Noto Serif', serif" }}>
                            Stay Running & Project
                        </h1>
                        <p>
                            It is a long established fact that a reader will be distracted by the <br />
                            readable content of a page when looking at its layout. The point of <br />
                            using Lorem Ipsum is that it has a more-or-less normal distribution <br />
                            of letter.
                        </p>
                        <button className="btn small-btn">Contact us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
