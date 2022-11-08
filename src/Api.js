class Api{
    constructor(t){
        this.path = "https://api.react-learning.ru";
        this.token = t;
    }
    getProducts(){
        return fetch(`${this.path}/products`, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        .then(res => res.json())
        .then(data => data);
    }
    getProduct(){

    }
    addProduct(){

    }
    updProduct(){

    }
    delProduct(){

    }
    logIn(){// войти

    }
    singUp(){//зарегистрироваться
    }

}
export default Api;