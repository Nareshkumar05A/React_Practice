import { useState } from "react";
function Car(props){
 
  const isname = false;
  const text = "elakkiya";
  const carList = [
    1,2,3,4,5
  ]
  const bool = { brand:"car",write:"open" }
  const has = { type:"fruit",color:"yellow" }
  return(
    <div>
    {bool.brand != undefined && has.color != undefined?
    <h1>orange</h1>:<h1>yellow</h1>}
  {isname?<h1>Naresh</h1>:<h2>Kumar</h2>}
  <h1>{isname}</h1>
  
  <ul>
    {carList.map((e,index) => (
      <p key ={index}>{e}</p>
    ))}
  </ul>
  </div>

  );
}
export default Car;