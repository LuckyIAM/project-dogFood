
import React, {useState, useEffect, useContext} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Truck  } from "react-bootstrap-icons"
import { Context } from "../App";
import CardBasket from "../components/CardBasket";
import Alternative from "../components/Alternative";

export default ({api, setFav}) => {
    const {token, basket, setBasket, count} = useContext(Context);
    const [total, setTotal] = useState(basket.length>0 ? total : 0);
    const [ _id, set_Id] = useState("");
    const [prdDiscounts, setProductsDiscounts] = useState(basket.length>0 ? prdDiscounts : 0);
    const [priceWithoutDiscount, setPriceWithoutDiscount] = useState(basket.length>0 ? priceWithoutDiscount : 0);

    useEffect(() => {
        let sumClean = 0;
        let discounts  = 0;
        let sumGross = 0;
        basket.forEach(element => {
            let price = Math.round(element.price / 100 * (100 - element.discount)) * element.count;
            sumClean = sumClean + price;
            setTotal(sumClean)
            let p = element.price * element.count;
            sumGross += p;
            setPriceWithoutDiscount(sumGross)
            if(element.discount){
                let dscnt = Math.floor((element.price / 100 * element.discount) * element.count);
                discounts +=dscnt;
                setProductsDiscounts(discounts);
            }else{
                discounts +=0;
                setProductsDiscounts(discounts);
            }
            return element;
        })
        setBasket(() => {return basket});
    }, [count, basket])
    
    
    
    const  stCardsContainer = {
        padding: "30px 10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignText: "center",
        gap: "20px"
    }
    const totalProducts = {
        position: "relative",
        top: "10vh",
        left: "0px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 0px 3px 0px #888", 
        borderRadius: "15px",
        padding: "15px",
        gap: "15px"
    }
    const deliverySt = {
        position: "relative", 
        top: "100px"
    }
    

    return <>{ basket.length>0 && token?
        <Container>
            <Row>
                <Col xs={12} md={8}>
                <h2 className="pt-2">{basket.length>0 ? <><b>{basket.length} товара</b> в корзине </>: "Корзина пуста"}</h2>
                    <div className="cards-container" style={stCardsContainer}>
                        {
                            basket.length > 0 &&
                            basket.map((d,i) =><CardBasket
                            key = {i}
                            {...d}
                            price_old={d.price}
                            price={Math.round(d.price / 100 * (100 - d.discount))}
                            api={api}
                            setFav={setFav}
                            _id={d._id}
                            />)
                            
                        }
                    </div>
                </Col>
                <Col  xs={12} md={4}>
                    <div className="total-products" style={totalProducts}>
                        <div className="title">
                            <h2 className="fw-bold">Ваша корзина</h2>
                        </div>
                        <div className="col-items">
                            <div className="row-item d-flex justify-content-between fw-bolder pt-3">
                                <div className="name-item text-secondary">
                                    Товары ({basket.length})
                                </div>
                                <div className="total">
                                    {priceWithoutDiscount ? priceWithoutDiscount : 0} ₽
                                </div>
                            </div> 
                            <div className="row-item d-flex justify-content-between fw-bolder pt-3">
                                <div className="name-item text-secondary">
                                    Скидка 
                                </div>
                                <div className="text-danger">
                                    -{prdDiscounts ? prdDiscounts : 0} ₽
                                </div>
                            </div>
                            <div className="row-item d-flex justify-content-between fw-bolder pt-5">
                                <div className="name-item ">
                                    Общая стоимость
                                </div>
                                <div className="total">
                                    {total ? total : 0} ₽
                                </div>
                            </div>
                        </div>
                        <button className="btn position-relative top-40 start-0 w-100">Оформить заказ</button>
                    </div>
                    <div className="delivery bg-light p-4 rounded-4" style={deliverySt}>
                        <Row>
                            <Col md={2}>
                                <Truck className="fw-bolder fs-3"/>
                            </Col>
                            <Col md={10}>
                                <h3 className="fw-bold fs-5">Доставка по всему миру!</h3>
                                <p className="fw-bolder fs-6">Доставка куръером - от 399 ₽</p>
                                <p className="fw-bolder fs-6">Доставка в пункт выдачи - от 199 ₽</p>
                            </Col>
                        </Row>
                        
                    </div>
                </Col>
            </Row>
        </Container>
        :
        <Alternative/>
        }
    </>
}