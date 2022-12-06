import React, {useState, useEffect} from "react";

export default (data, cnt) =>{
    const [page, setPage] = useState(1);
    const maxPage = Math.ceil(data.length /cnt);

    useEffect(() =>{
        console.log(maxPage);
    },[])


    const next =  () => {
        let newPage = Math.min(page + 1, maxPage)
        setPage(newPage);
        console.log(newPage);
    }

    const prev = () => {
        let newPage = Math.max(1, page - 1)
        setPage(newPage)
        console.log(newPage);
    }

    const change = (p) => {
        setPage(Math.max(1, Math.min(p,maxPage)))
    }

    return {next, prev, change, maxPage};
}
