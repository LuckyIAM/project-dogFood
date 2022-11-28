import React, {useState} from "react";
import BlogCard from "../BlogCard";
import dataBlog from "../../assets/dataBlog.json"

export default ({data,transform}) =>{
    

    const st={
        width: `${data.length * 280}px`,
        height: "390px",
        display: "flex",
        gap: "30px",
        position: "relative",
        transition: "2s transform ease-out",
        transform: `translateX(${transform}px)`
    }
    console.log(st.width);
    
//img, data_publication, title
    return(
                  
        <div className="bestseller-box" style={st}>
            {dataBlog.map((d,i) => 
                <BlogCard   
                    img={d.image}
                    created_at={d.created_at}
                    title={d.title}
                    key={i}
                />
            )}
        </div>
    )
}