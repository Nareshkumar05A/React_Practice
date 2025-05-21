import { useState } from "react";
function Apple()
{
    const [color,setcolor] = useState('Blue')
    return(
        <div>
        <h1>Naresh kumar</h1>
        <h1>i am naresh kumar and my favorite color is {color}</h1>
        <button onClick={()=>{setcolor('Red')}}>change color</button>
        </div>
    );
}
export default Apple;