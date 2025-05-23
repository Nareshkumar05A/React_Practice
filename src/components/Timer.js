import { useEffect, useState } from "react";

function Timer()
{
    useEffect(() => {
        console.log('render Screen')
    },[])

    const [count,setCount] = useState(0);

    function updateCount()
    {
        setCount((previousState) =>{
            return previousState + 1
        })
    }
    return <>
        <h1>I have renderd {count} timer!</h1>
        <button onClick={(updateCount)}>Increase Count</button>
    </>
}
export default Timer;