import React from "react";
import "./Achivment.scss";
import icon1 from "../../../image/images/happy.png";
import icon2 from "../../../image/images/marketing.png";
import icon3 from "../../../image/images/surface.png";
import icon4 from "../../../image/images/transportation.png";

const Achivment = () => {
    return (
        <div className="container mb-5">
            <div className="row achivment-section">
                <div className="col-lg-5 col-md-6 col-sm-12 text-left d-flex align-items-center">
                    <div>
                        <h1 className="font-weight-bold" style={{ fontFamily: "'Noto Serif', serif" }}>
                            Our Achievements
                        </h1>
                        <small>
                            It is a long established fact that a reader will be distracted by <br />
                            the readable content of a page when looking at its layout. The <br />
                            point of using Lorem Ipsum is that it has a more-or-less normal <br />
                            distribution of letter.
                        </small>
                    </div>
                </div>

                <div className="col-lg-7 col-md-6 col-sm-12">
                    <div className="row">
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <div className="row small-btn big-btn my-2 mr-1">
                                <div className="col-xl-4 col-md-6 col-sm-12 d-flex align-items-center">
                                    <div className="img">
                                        <img src={icon1} className="img-fluid image-color" alt="" />
                                    </div>
                                </div>
                                <div className="col-8">
                                    <h2>700+</h2>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <div className="row small-btn big-btn my-2 mr-1">
                                <div className="col-xl-4 col-md-6 col-sm-12 d-flex align-items-center">
                                    <div className="img">
                                        <img src={icon2} className="img-fluid image-color" alt="" />
                                    </div>
                                </div>
                                <div className="col-8 p-2">
                                    <h2>140+</h2>
                                    <p className="project-h">Project Completed</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <div className="row small-btn big-btn my-2 mr-1">
                                <div className="col-xl-4 col-md-6 col-sm-12 d-flex align-items-center">
                                    <div className="img">
                                        <img src={icon3} className="img-fluid image-color" alt="" />
                                    </div>
                                </div>
                                <div className="col-8">
                                    <h2>25+</h2>
                                    <p>Crazy Minds</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <div className="row small-btn big-btn my-2 mr-1">
                                <div className="col-xl-4 col-md-6 col-sm-12 d-flex align-items-center">
                                    <div className="img">
                                        <img src={icon4} className="img-fluid" alt="" />
                                    </div>
                                </div>
                                <div className="col-8">
                                    <h2>75+</h2>
                                    <p>Runing Project</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achivment;
