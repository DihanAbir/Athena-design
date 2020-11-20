import React from "react";
import service1 from "../../../image/images/experience.png";
import service2 from "../../../image/images/interface.png";
import service3 from "../../../image/images/prototyping.png";
import service4 from "../../../image/images/illustration.png";
import "./service.scss";

const Service = () => {
    return (
        <section className="services container py-3" id="services">
            <div className="row d-flex justify-content-center mb-5">
                <div className="col-sm-8 col-md-5 text-center">
                    <h1 className="font-weight-bold" style={{ fontFamily: "'Noto Serif', serif" }}>
                        What we do
                    </h1>
                    <p>
                        Our main focus is to make the User Experience very <br />
                        simple and easy. Simplicity is our Strength.
                    </p>
                </div>
            </div>
            <div className="row service-section d-flex align-items-center justify-content-around">
                <div className="col-9 small-card col-sm-5 col-md-2 text-center">
                    <img src={service1} alt="" />
                    <br />
                    <br />
                    <h5>Experience Design</h5>
                    <p className="mt-3">The point of using Lorem Ipsum is that it has a more-orless normal.</p>
                </div>
                <div className="col-9 small-card col-sm-5 col-md-2 text-center">
                    <img src={service2} alt="" />
                    <br />
                    <br />
                    <h5>Interface Design</h5>
                    <p className="mt-3">The point of using Lorem Ipsum is that it has a more-orless normal.</p>
                </div>
                <div className="col-9 small-card col-sm-5 col-md-2 text-center">
                    <img src={service3} alt="" />
                    <br />
                    <br />
                    <h5>Prototyping</h5>
                    <p className="mt-3">The point of using Lorem Ipsum is that it has a more-orless normal.</p>
                </div>
                <div className="col-9 small-card col-sm-5 col-md-2 text-center">
                    <img src={service4} alt="" />
                    <br />
                    <br />
                    <h5>Illustration</h5>
                    <p className="mt-3">The point of using Lorem Ipsum is that it has a more-orless normal.</p>
                </div>
            </div>
        </section>
    );
};

export default Service;
