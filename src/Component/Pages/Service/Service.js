import React from 'react';
import service1 from '../../../image/images/experience.png';
import service2 from '../../../image/images/interface.png';
import service3 from '../../../image/images/prototyping.png';
import service4 from '../../../image/images/illustration.png';
import './service.scss';

const Service = () => {
    return (
        <section className="services container py-3">
      <div className="row d-flex justify-content-center mb-5">
        <div className="col-sm-8 col-md-5 text-center">
          <h3>What we do</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat doloremque soluta, quis unde ipsa distinctio voluptatum.</p>
        </div>
      </div>
      <div className="row d-flex align-items-center justify-content-around">
        <div className="col-9 small-card col-sm-5 col-md-2 text-center">
          <img src={service1} alt=""/>
          <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, quam!</p>
        </div>
        <div className="col-9 small-card col-sm-5 col-md-2 text-center">
            <img src={service2} alt=""/>
            <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, quam!</p>
        </div>
        <div className="col-9 small-card col-sm-5 col-md-2 text-center">
            <img src={service3} alt=""/>
            <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, quam!</p>
        </div>
        <div className="col-9 small-card col-sm-5 col-md-2 text-center">
            <img src={service4} alt=""/>
            <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, quam!</p>
        </div>
      </div>
    </section>
    );
};

export default Service;