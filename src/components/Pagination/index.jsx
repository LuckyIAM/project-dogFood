import React, {useState, useEffect} from "react";

export default ({hook}) =>{
    const [pages, setPages] = useState([]);

    useEffect(() => {
        const arr = [];
        for(let i = 1; i <= hook.maxPage; i++){
            arr.push(i);
        }
        setPages(arr);
    },[hook])

    return <div className="pagination">
        <button onClick={hook.prev}>&lt;</button>
        {pages.map(p => {
            return <button key ={p} onClick={() => {hook.change(p)}}>{p}</button>
        })}
        <button onClick={hook.next}>&gt;</button>
    </div>
}