import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Pricing from "../Pricing/Pricing";
import Achivment from '../Achivment/Achivment';
import Project from '../Project/Project';
import Service from '../Service/Service';

const Landingpage = () => {
    return (
        <div>
            <h1 className="ml-5">Lnading page</h1>
            <Header />
            <Pricing />
            <Footer />
            <Service/>
            <Project/>
            <Achivment/>
        </div>
    );
};

export default Landingpage;
