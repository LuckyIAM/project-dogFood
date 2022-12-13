function addToBasket(goods, _id, idProduct, setIdProduct, basket, setBasket){  
    goods.forEach(element => { 
        element.count = 1;
        if (element._id === _id && !idProduct.includes(_id)){
            idProduct.push(element._id);
            setIdProduct(() => {return idProduct});
            localStorage.removeItem("id-product");
            localStorage.setItem("id-product", JSON.stringify(idProduct));  
            basket.push(element);
            setBasket(() => {return basket});
            localStorage.removeItem("basket-product");
            localStorage.setItem("basket-product", JSON.stringify(basket));
            console.log("idProduct",idProduct);
            console.log("basket2",basket);
        }
        //to clean the localStorage and arrays  
        // idProduct.splice(0, idProduct.length)
        // console.log("idProduct",idProduct);
        // localStorage.removeItem("id-product");
        // localStorage.setItem("id-product", JSON.stringify(basket));
        // basket.splice(0,basket.length);
        // localStorage.removeItem("basket-product");
        // localStorage.setItem("basket-product", JSON.stringify(basket));
        // console.log("basket2",basket);
        
    })     
}

export{addToBasket}

