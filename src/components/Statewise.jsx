
import React from 'react';
import {useEffect,useState} from 'react';
import './state.css';


export const Statewise = () => {


    const [data,setData]=useState([]);


const getCovidData = async ()=>{
    const apiData =  await fetch("https://api.covid19india.org/data.json");
    const arrData=  await apiData.json();
    setData(arrData.statewise);
    // console.log(arrData.statewise);

}


   useEffect(()=>{
       getCovidData();
   },[])
    return (
      <>
   
     <h1 className="text-center display-4">INDIA COVID-19 TRACKER</h1>

     <table className="table container mt-5  mb-5 shadow-lg">
     <thead>
    <tr className="bg-dark text-white">
      <th scope="col">State</th>
      <th scope="col">Confirmed</th>
      <th scope="col">Recovered</th>
      <th scope="col" >Deaths</th>
      <th scope="col" className="urlo">Actives</th>
    
    </tr>
  </thead>
  <tbody>
      {
      data.map((curEle,index)=>{
         
        if (curEle.state ==='State Unassigned') {
            return null;
          }
        return(
            <tr key={index}>
            <th scope="col">{curEle.state}</th>
          <th scope="col">{curEle.confirmed}</th>
          <th scope="col"  className="text-success">{curEle.recovered}</th>
          <th scope="col"  className="text-danger">{curEle.deaths}</th>
          <th scope="col" className="urlo">{curEle.active}</th>
         
        </tr>
        )
      })
      }

</tbody>

     </table>

      </>
    )
}
export default Statewise;