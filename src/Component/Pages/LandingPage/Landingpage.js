import React from 'react';
import Achivment from '../Achivment/Achivment';
import Header from '../Header/Header';
import Project from '../Project/Project';
import Service from '../Service/Service';

const Landingpage = () => {
    return (
        <div>
            <Header/>
            <Service/>
            <Project/>
            <Achivment/>
        </div>
    );
};

export default Landingpage;