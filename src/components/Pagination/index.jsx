import React, {useState, useEffect} from "react";
import "./style.css"

export default ({hook}) =>{
    const [pages, setPages] = useState([]);

    useEffect(() => {
        const arr = [];
        for(let i = 1; i <= hook.maxPage; i++){
            arr.push(i);
        }
        setPages(arr);
    },[hook])

    return <div className="pagination d-flex justify-content-center ">
        <button className="btn-left" onClick={hook.prev} disabled={hook.page === 1}>&lt;</button>
        {pages.map(p => {
            return <button className="btn-cells" key ={p} onClick={() => {hook.change(p)}}
            style={{background: hook.page === p ? "var(--main-color)" : "initial"}}>{p}</button>
        })}
        <button className="btn-right" onClick={hook.next} disabled={hook.page === hook.maxPage}>&gt;</button>
    </div>
}