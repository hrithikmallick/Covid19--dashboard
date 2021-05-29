import React from 'react'
import {useEffect,useState} from 'react';
import './global.css';
export const India = () => {
    const [data,setData]=useState([]);
    const getIndia = async ()=>{
        const apiData =  await fetch("https://api.covid19india.org/data.json");
        const arrData=  await apiData.json();
        setData(arrData.statewise[0]);
        // console.log(arrData.Global);
    
    }
    useEffect(()=>{
        getIndia();
    },[])
    return (
        <>
        <div className="container firstCards mb-5">
 
            <div className="card text-center shadow-lg card1 text-white bg-primary" style={{width: '18rem'}}>
                     <div className="card-body">
                         <h4 className="card-title">Total Confirmed</h4>
                         <p className="card-text">{data.confirmed}</p>

                         <i className="fas fa-check-circle" style={{fontSize:'35px'}}></i>
                     </div>
             </div>
 
             <div className="card text-center shadow-lg card2 text-white bg-success" style={{width: '18rem'}}>
                     <div className="card-body ">
                         <h4 className="card-title">Total Recovered</h4>
                         <p className="card-text">{data.recovered}</p>
                          <i className="fas fa-shield-alt" style={{fontSize:'35px'}}></i>
                     </div>
             </div>
 
             <div className="card text-center shadow-lg card3 text-white bg-danger" style={{width: '18rem'}}>
                     <div className="card-body">
                         <h4 className="card-title">Total Deaths Recorded</h4>
                         <p className="card-text">{data.deaths}</p>
                         <i className="fas fa-skull-crossbones " style={{fontSize:'35px'}}></i>
                       
                     </div>
             </div>
             <div className="card text-center shadow-lg card3 text-white bg-warning" style={{width: '18rem'}}>
                     <div className="card-body">
                         <h4 className="card-title">Total Active Cases</h4>
                         <p className="card-text">{data.active}</p>
                         <i className="fas fa-syringe" style={{fontSize:'35px'}}></i>
                     </div>
             </div>
          </div>
 
           
             
          
 
        
        
 
        
        </>
    )
}
export default India;