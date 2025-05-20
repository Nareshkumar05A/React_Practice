function Car(){
  const isname = false;
  const bool = { brand:"car",write:"open" }
  const has = { type:"fruit",color:"yellow" }
  return(
    <>
    {bool.brand != undefined && has.color != undefined?
    <h1>orange</h1>:<h1>yellow</h1>}
  {isname?<h1>Naresh</h1>:<h2>Kumar</h2>}
  </>
  );
}
export default Car;