import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Pricing from "../Pricing/Pricing";

const Landingpage = () => {
    return (
        <div>
            <h1 className="ml-5">Lnading page</h1>
            <Header />
            <Pricing />
            <Footer />
        </div>
    );
};

export default Landingpage;
