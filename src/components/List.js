import { useState } from "react";

function List() {
    const [list, setList] = useState(['text1', 'text2']);

    return (
        <div>
            <ul>
                {list.map((el, index) => (
                    <li key={index}>{el}</li>
                ))}
            </ul>
        </div>
    );
}

export default List;
