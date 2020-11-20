import React from "react";
import "./Pricing.scss";

function Pricing() {
    return (
        <>
            <section className="pricing-container" id="pricing">
                <h1 className="font-weight-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Choose Your Dedicated Team
                </h1>
                <div class="card-deck m-5 row">
                    <div class="card col-sm-10">
                        <h1 className="font-weight-bold">$199</h1>
                        <h5 class="card-title">For Basic</h5>
                        <div className="title-bottom mx-auto"></div>
                        <div class="card-body">
                            <p class="card-text">
                                <h5>Homepage</h5>
                                <h5>No Inner Page</h5>
                                <h5>Asset file</h5>
                                <h5>Source file</h5>
                                <h5>Free Stock Photos</h5>
                                <h5>10 Days Free Support</h5>
                                <h5>24/7 Support</h5>
                            </p>
                            <button className="card-button mx-auto">Order Now</button>
                        </div>
                    </div>
                    <div class="card col-sm-10">
                        <h1 className="font-weight-bold">$399</h1>
                        <h5 class="card-title">For Preferred</h5>
                        <div className="title-bottom mx-auto"></div>
                        <div class="card-body">
                            <div class="card-text">
                                <h5>Homepage</h5>
                                <h5>4 Inner Page</h5>
                                <h5>Asset file</h5>
                                <h5>Source file</h5>
                                <h5>Free Stock Photos</h5>
                                <h5>20 Days Free Support</h5>
                                <h5>24/7 Support</h5>
                            </div>
                            <button className="card-button mx-auto">Order Now</button>
                        </div>
                    </div>
                    <div class="card col-sm-10">
                        <h1 className="font-weight-bold">$599</h1>
                        <h5 class="card-title">For Elite</h5>
                        <div className="title-bottom mx-auto"></div>
                        <div class="card-body">
                            <p class="card-text">
                                <h5>Homepage</h5>
                                <h5>8 Inner Page</h5>
                                <h5>Asset file</h5>
                                <h5>Source file</h5>
                                <h5>Free Stock Photos</h5>
                                <h5>30 Days Free Support</h5>
                                <h5>24/7 Support</h5>
                            </p>
                            <button className="card-button mx-auto">Order Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Pricing;
