import React from 'react';
import pizzaLogo from '../assets/pizzalogo.png';
export function navbar(){
    return(
        <div className="navbar">
            <div className="leftside">
            <img src= {pizzaLogo}/>
            </div>
            <div className="rightside"></div>
           
            
        </div>
    )
}
//export default navbar