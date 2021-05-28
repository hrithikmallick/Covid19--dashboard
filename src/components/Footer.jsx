import React from 'react';
import './footer.css';

export const Footer = () => {
    return (
      <>
      <div className="container mt-5 mb-3 text-center"><p>@ Copyright 2021 by HRITHIK MALLICK. </p>
      <div className="d-flex text-center footi mt-1">
      <a href="https://www.linkedin.com/in/hrithik-mallick-30599620a"><i className="fab fa-linkedin ft" style={{fontSize:'30px'}}></i></a>
      <a href="https://github.com/hrithikmallick" className="text-dark"><i className="fab fa-github " style={{fontSize:'30px'}}></i></a>
           
      </div>
      </div>
      </>
    )
}
 export default Footer;