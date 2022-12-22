import React, {useState, useEffect, useContext} from "react";
import { Context } from "../App";
import {Link} from "react-router-dom"
import Advertising from "../components/Advertising";
import AdvertisingMini from "../components/AdvertisingMini";
import { Container, Row, Col} from "react-bootstrap";
import set from "../components/AdvertisingMini/img/img_set.png";
import oil from "../components/AdvertisingMini/img/img_oil.png";
import corn from "../components/AdvertisingMini/img/img_corn.png";
import neck from "../components/AdvertisingMini/img/img_neck.png";
import Carousel from "../components/Сarousel";
import Blog from "../components/Blog";
import { ArrowLeftCircle, ArrowRightCircle, ChevronRight } from "react-bootstrap-icons";
import dataBlog from "../assets/dataBlog.json"
import dataFavourit from "../assets/dataFavourit.json"




export default({setFav, goods}) => {
    const {widthScreen} = useContext(Context);
    const [gds,setGds]=useState([]);
    const [bests, setBests] =useState([]);
    const [cnt1, setCnt1] = useState(1);
    const [transform1, setTransform1] = useState(0);
    const [cnt2, setCnt2] = useState(1);
    const [transform2, setTransform2] = useState(0);
    const [cnt3, setCnt3] = useState(1);
    const [transform3, setTransform3] = useState(0);
    const [cnt4, setCnt4] = useState(1);
    const [transform4, setTransform4] = useState(0);

    const text1 = ['Наборы','Микс масел','Рога \nсеверного \nоленя','Слипы из \n шеи индейки']
    const text2 = [`для дрессировке `,`пищевая здоровая \n натуральная добавка`,'от 10кг до 30кг','100% натуральное']
    const text3 = ['от 480 ₽','']
    const clr = ['#d7a216','#25b5be','#88b549','#db6825']
    const btn = { 
        borderRadius: "30px",
        border: "none",
        padding: "8px 15px",
        background:"#fff"
    }
    const title={
        background:"var(--main-color)",
        paddingTop: "30px",
        paddingBottom: "100px"    
    }
    const wrapper = {
        position: "relative",
        left: "7%",
        rigth: "7%"        
    }
    const container ={
        position: "relative",
        top: "-30px"
    }
    const arrow={
        width: "30px",
        height: "30px",
        marginLeft: "15px",
        cursor: "pointer"
    }
    const stCarousel={
        overflow: "hidden"
    }
    const marginCarousel ={
        margin: "50px 0px"
    }

    
    useEffect(() =>{
        setBests(goods.filter(g => g.likes.length>5));
        setGds(goods) ;   
    }, [goods])

    return <>
    <div className="title-box" style={title}>    
        <div className="wrapper-box" style={wrapper}>
            <h1 className="home__title">
                Крафтовые<br/>
                лакомства для <br/>
                собак
                </h1>
            <p className="home__text">
                Всегда свежие лакомства ручной<br/>
                работы с доставкой по России и Миру
            </p>
            <Link to="/catalog" ><button className="btn-catalog" style={btn}>Каталог<ChevronRight/></button></Link>
        </div>
    </div>

    <Container style={container}>
        <Row>
            <Col md={12} xs={12}style={{borderRadius: "15px", backgroundColor: "#ff9027", padding: "20px", marginBottom: "20px"}}>
                <Advertising/>
            </Col>
            <Col md={6} xs={6}>
                <h2>Хиты</h2>
            </Col>
            <Col md={6} xs={6} className="d-flex justify-content-end" >
                <ArrowLeftCircle className="gds"  style={arrow} 
                    onClick={() => {
                        if( cnt1 !== 1 && gds.length !== 0){
                            setCnt1(cnt1 - 1);
                            setTransform1(transform1 + (280 * widthScreen));
                            console.log(cnt1, transform1);
                        }
                    }}/>
                 
                <ArrowRightCircle className="gds" style={arrow} 
                    onClick={() =>{
                        if( cnt1 <= gds.length / widthScreen ){
                            setCnt1(cnt1 + 1);
                            setTransform1(-(280 * widthScreen) * cnt1);
                            console.log(cnt1, transform1);
                        }
                    }}/> 
            </Col>
            <Col md={12} xs={12} style={stCarousel}>
                <Carousel transform={transform1} goods={gds} setFav={setFav} />
            </Col>
            <Col md={6} xs={12} style={{marginTop: "20px"}}>
                <AdvertisingMini text1={text1[0]} text2={text2[0]} 
                text3={text3[0]} img={set} color={clr[0]} />
            </Col>
            <Col md={6} xs={12} style={{marginTop: "20px"}}>
                <AdvertisingMini text1={text1[1]} text2={text2[1]} 
                text3={text3[1]} img={oil} color={clr[1]}/>
            </Col>
            <Col md={6} xs={6} style={marginCarousel}>
                <h2>Лакомства</h2>
            </Col>
            <Col md={6} xs={6} className="d-flex justify-content-end" style={marginCarousel}>
             <ArrowLeftCircle className=" bests" style={arrow} 
                onClick={() => {
                    if( cnt2 !== 1 && bests.length !== 0){
                        setCnt2(cnt2 - 1);
                        setTransform2(transform2 + (280 * widthScreen))
                    }
                }}/>
            <ArrowRightCircle className=" bests" style={arrow} 
                onClick={() =>{
                    if( cnt2 <= bests.length / widthScreen ){
                    setCnt2(cnt2 + 1);
                    setTransform2(-(280 * widthScreen) * cnt2)
                    console.log(cnt2, transform2);
                }}}/> 
            </Col>
            <Col md={12} xs={12} style={stCarousel}>
                <Carousel transform={transform2} goods={bests}  setFav={setFav}/>
            </Col>
            <Col md={6} xs={12} style={{marginTop: "20px"}}>
                <AdvertisingMini text1={text1[2]} text2={text2[2] } 
                text3={text3[1]} img={corn} color={clr[2]}/>
            </Col>
            <Col md={6} xs={12} style={{marginTop: "20px"}}>
                <AdvertisingMini text1={text1[3]} text2={text2[3]} 
                text3={text3[1]} img={neck} color={clr[3]}/>
            </Col>
            <Col md={6} xs={6} style={marginCarousel}>
                <h2>Новости</h2>
            </Col>
            <Col md={6} xs={6} className="d-flex justify-content-end" style={marginCarousel}>
                <ArrowLeftCircle className=" bests" style={arrow} 
                    onClick={() => {
                        if( cnt3 !== 1 && dataBlog.length !== 0){
                            setCnt3(cnt3 - 1);
                            setTransform3(transform3 + (280 * widthScreen))
                        }
                    }}/>
                <ArrowRightCircle className=" bests" style={arrow} 
                    onClick={() =>{
                        if( cnt3 <= dataBlog.length / widthScreen ){
                        setCnt3(cnt3 + 1);
                        setTransform3(-(280 * widthScreen) * cnt3)
                        console.log(cnt3, transform3);
                    }}}/> 
            </Col>
            <Col md={12} xs={12} style={stCarousel}>
                <Blog transform={transform3} data={dataBlog} />
            </Col>
            <Col md={12} xs={12} style={{borderRadius: "15px", backgroundColor: "#ff9027"}}>
                <Advertising />
            </Col>
            <Col md={6} xs={6} style={marginCarousel}>
                <h2>Вы смотрели</h2>
            </Col>
            <Col md={6} xs={6} className="d-flex justify-content-end" style={marginCarousel}>
                <ArrowLeftCircle className="youWatched" style={arrow} 
                    onClick={() => {
                        if( cnt4 !== 1 && dataFavourit.length !== 0){
                            setCnt4(cnt4 - 1);
                            setTransform4(transform4 + (280 * widthScreen))
                        }
                    }}/>
                <ArrowRightCircle className="youWatched" style={arrow} 
                    onClick={() =>{
                        if( cnt4 <= dataFavourit.length / widthScreen ){
                        setCnt4(cnt4 + 1);
                        setTransform4(-(280 * widthScreen) * cnt4)
                        console.log(cnt4, transform4);
                    }}}/> 
            </Col>
            <Col md={12} xs={12} style={stCarousel}>
                <Carousel transform={transform4} goods={dataFavourit} />
            </Col>
        </Row>
    </Container>
    </>
}

