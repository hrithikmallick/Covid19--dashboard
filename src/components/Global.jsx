import React from 'react'
import {useEffect,useState} from 'react';
import './global.css';
export const Global = () => {

    const [data,setData]=useState([]);


    const getGlobal = async ()=>{
        const apiData =  await fetch("https://api.covid19api.com/summary");
        const arrData=  await apiData.json();
        setData(arrData.Global);
        // console.log(arrData.Global);
    
    }
    
    
       useEffect(()=>{
           getGlobal();
       },[])

    return (
       <>
       <div className="container firstCards mb-5">

           <div className="card text-center shadow-lg card1 text-primary" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h4 className="card-title">Total Confirmed</h4>
                        <p className="card-text">{data.TotalConfirmed}</p>
                        <p  className="">+ {data.NewConfirmed}</p>
                    </div>
            </div>

            <div className="card text-center shadow-lg card2 text-success" style={{width: '18rem'}}>
                    <div className="card-body ">
                        <h4 className="card-title">Total Recovered</h4>
                        <p className="card-text">{data.TotalRecovered}</p>
                        <p  className="">+ {data.NewRecovered}</p>
                    </div>
            </div>

            <div className="card text-center shadow-lg card3 text-danger" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h4 className="card-title">Total Deaths</h4>
                        <p className="card-text">{data.TotalDeaths}</p>
                        <p  className="">+ {data.TotalDeaths}</p>
                    </div>
            </div>
      
         </div>

          
            
         

       
       

       
       </>
    )
}
export default Global;