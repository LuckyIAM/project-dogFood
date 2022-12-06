import React, {useState, useEffect} from "react";

export default ({cnt}) =>{
    const [pages, setPages] = useState([]);

    useEffect(() => {
        const arr = [];
        for(let i = 0; i <= cnt; i++){
            arr.push(i);
        }
        setPages(arr);
    },[])

    return <div className="pagination">
        <button>&lt;</button>
        {pages.map(p => {
            <button key ={p} onClick={() => {console.log(p);}}></button>
        })}
        <button>&gt;</button>
    </div>
}