import React from "react";
import {useEffect,useState} from "react";

export default function Counter(){

const start=new Date("2024-12-29");

const [days,setDays]=useState(0);

useEffect(()=>{

const timer=setInterval(()=>{

const diff=new Date()-start;

setDays(Math.floor(diff/(1000*60*60*24)));

},1000);

return()=>clearInterval(timer);

},[]);

return(

<div className="counter">

<h2>❤️ Llevamos juntos ❤️</h2>

<h1>{days} días</h1>

</div>

);

}