import React from 'react';
import pic from '../coi.jpg';
import  './main.css';

export const Main = () => {
    return (
        <div>
            
    <div className="container my-5" id="center">
      <div
        className="
          row
          p-4
          pb-0
          pe-lg-0
          pt-lg-5
          align-items-center
          rounded-3
          border
          shadow-lg
        "
      >
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="welcome">Coronavirus Disease <i className="fas fa-bacteria"></i></h1>
          <p className="lead mypara">
          Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.
The best way to prevent and slow down transmission is to be well informed about the COVID-19 virus. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. 
The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).
          </p>
          <div
            className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
          >
           
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img
            className="rounded-lg-3 myimg"
            src={pic} 
            alt=""
            width="410" height="400"
          />
        </div>
      </div>
    </div>
        </div>
    )
}
export default Main;