import React from "react";

export default function Welcome({open}){

return(

<div className="welcome">

<h1>

✨ Tengo una sorpresa para ti ✨

</h1>

<p style={{marginBottom:"40px",fontSize:"22px"}}>

Espero que esta pequeña página te saque una sonrisa ❤️

</p>

<button onClick={open}>

Abrir Carta 💌

</button>

</div>

);

}