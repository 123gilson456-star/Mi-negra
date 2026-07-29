import React, { useState } from "react";
import Welcome from "./components/Welcome";
import Letter from "./components/Letter";
import Gallery from "./components/Gallery";
import Counter from "./components/Counter";

export default function App(){

const [open,setOpen]=useState(false);

if(!open)
return <Welcome open={()=>setOpen(true)}/>

return(

<div>

<Letter/>

<Gallery/>

<Counter/>

</div>

);

}