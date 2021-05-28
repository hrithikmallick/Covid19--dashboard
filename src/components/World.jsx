import React from 'react'
import Global from "./Global";
import Country from "./Country";

export const World = () => {
    return (
      <>
     <h1 className="text-center display-4 mb-5">GLOBAL COVID-19 TRACKER</h1>
      <Global/>
      <Country/>
      </>
    )
}
 export default World;