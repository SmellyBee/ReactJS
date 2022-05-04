import React, { useState } from 'react';
import './RaitingStar.css';


export default function RaitingStar()
{
  const[stars,setStars]=useState([
    {sCode:1,sColor:'black'},
    {sCode:2,sColor:'black'},
    {sCode:3,sColor:'black'},
    {sCode:4,sColor:'black'},
    {sCode:5,sColor:'black'},
  ]);

  const Ocena=(a)=>{
    const newStars=stars.filter((item)=>item.sColor!=='black');
    setStars(newStars);
    var OcenaHeder=document.createElement('h1');
    var x=document.getElementById('niz');
    OcenaHeder.innerHTML="Ocenili ste proizvod sa "+a.sCode +"&#9733;";
    x.appendChild(OcenaHeder);
  }


    return (
    <div className="star-rating" id="niz">
      {
      stars.map(sObj=>(
        <button key={sObj.sCode} className="star" onClick={()=>Ocena(sObj)}>&#9733;</button>
      )
      )}
    </div>
    );
}
