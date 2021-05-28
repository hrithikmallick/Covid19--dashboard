import React from 'react'

import {useEffect,useState} from 'react';
export const Country = () => {
    const [data,setData]=useState([]);
    const getCovidData = async ()=>{
        const apiData =  await fetch("https://api.covid19api.com/summary");
        const arrData=  await apiData.json();
        setData(arrData.Countries);
        // console.log(arrData.Countries);
    
    }
    
    
       useEffect(()=>{
           getCovidData();
       },[])
    return (
     <>
     

<table className="table container mt-5 shadow-lg">
<thead>
<tr className="bg-dark text-white">
 <th scope="col">Country</th>
 <th scope="col">Confirmed</th>
 <th scope="col">Recovered</th>
 <th scope="col" >Deaths</th>
 

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
       <th scope="col">{curEle.Country} </th>
     <th scope="col">{curEle.TotalConfirmed} </th>
     <th scope="col"  className="text-success">{curEle.TotalRecovered}</th>
     <th scope="col" className="text-danger">{curEle.TotalDeaths} </th>
    
    
   </tr>
   )
 })
 }

</tbody>

</table>

     </>
    )
}
export default Country;