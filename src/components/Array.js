import { useState } from "react";

function Array() {
    const [array, setArray] = useState([]);
    const [count, setCount] = useState(1);

    function addItem() {
        const itemName = `Item ${count}`;
        setArray((prev) => [...prev, itemName]);
        setCount((prev) => prev + 1);
    }

    return (
        <>
            <h1>List</h1>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {array.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default Array;
