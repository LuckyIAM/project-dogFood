import React, {useState,useContext} from "react";
import {Link} from "react-router-dom"
import { Context } from "../../App";
import "./style.css";
import Logo from "../Logo";
import {Container, Row, Col} from "react-bootstrap";




export default({openPopup, user, setToken, setUser}) => {
    const {searchText, search, setProducts, goods} = useContext(Context)
    const [trnsfrm, setTrnsfrm] = useState(-285);
    const [clck, setClck] = useState(1);

    const handler = e=>{
        search(e.target.value);
        const result = goods.filter(el => el.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1);
        console.log(result);
        setProducts(result);

    }

    const logout = e =>{
        e.preventDefault();
        localStorage.removeItem("token-user");
        localStorage.removeItem("user");
        setToken("");
        setUser({});
    }
    const navBarSlide = (e) => {
        if(clck % 2 === 0){
            setClck(clck +1);
            setTrnsfrm(-285);
        }else {
            setClck(clck +1);
            setTrnsfrm(0);
        }
    }

    const stHeader = {
        padding: "0px 10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "sticky",
        left: 0,
        top: 0,
        zIndex: 2
        
    }
    const stNavWrapper = {
        display: "flex",
        backgroundColor: "var(--main-color)",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
    }
    const inputSize = {
        width: "40vw"
    }

    const stBtn ={
        background: "var(--main-color)",
        border: "none"
    }
    
    const navContainer = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start", 
        width: "100vw",
        gap: "5px"
    }

    const stSlideBar = {
        width: "70vw",
        height: `${290 + trnsfrm}px`,
        transition: "1s transform ease-out, 1s height ease-out ",
        transform: `translateY(${trnsfrm}px)`,

    }
    const wrappSlideBar={
        height: "100%",
        overflow: "hidden",
        zIndex: 0
    }
    

    return <>
        <header style={stHeader}>
            <div className="nav-wrapper" style={stNavWrapper}>
                <Logo/>
                <input type="search" value={searchText} onChange={handler} style={inputSize}/>
                <nav className="navbar" >
                    <div className="container-fluid">
                        <button className="navbar-icon" onClick={navBarSlide}>
                            ???
                        </button>
                    </div>
                </nav>
            </div>
           
            <div className="slide-bar" style={stSlideBar}>
                    <div className="wrapper-slade-bar" style={wrappSlideBar}>
                        <Container >
                            <Row >
                                <Col sm={12} style={{height: ``}}>
                                    <nav style={navContainer}>
                                        {user && <Link to="/favourites">??????????????????</Link>}
                                        {user && <Link to="/add">???????????????? ??????????</Link>}
                                        {user && <Link to="/catalog">??????????????</Link>}
                                        {user && <Link to="/basket">??????????????</Link>}
                                        {user && <Link to="/profile">??????????????</Link>} 
                                        {user && <a href=""onClick={logout}>??????????</a>}
                                        {!user && <a href=""onClick={e => {e.preventDefault(); 
                                            openPopup(true)}}>????????</a>}
                                    </nav>
                                </Col>
                            </Row>
                        </Container>
                    </div>
        </div>
        </header>
    </>
}