import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Pricing from "../Pricing/Pricing";
import Achivment from "../Achivment/Achivment";
import Project from "../Project/Project";
import Service from "../Service/Service";

const Landingpage = () => {
    return (
        <div>
            <Header />
            <Service />
            <Project />
            <Achivment />
            <Pricing />
            <Footer />
        </div>
    );
};

export default Landingpage;
