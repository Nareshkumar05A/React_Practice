import { useState } from "react"
function Scooter()
{
    const [color,setcolor] = useState('Red')
    const [brand,setBrand] = useState('Honda')
    const [Model,setModel] = useState('Model')
    const [Year,setYear] = useState('2002')
    
    return <>
    <h1>My Scooter</h1>
    <p>Brand:{brand}</p>
     <p>Model:{Model}</p>
     <p>Year:{Year}</p>
     <p>color:{color}</p>
     </>
}
export default Scooter;