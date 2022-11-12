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
    //     .then(res => res.json())
    //     .then(data => data);
    }
    getProduct(productId){
        return fetch(`${this.path}/products/${productId}`,{
            headers: {
                authorization: `${this.token}`
            }
        })

    }
    addProduct(body){
        return fetch(`${this.path}/products`, {
            method: "POST",
            headers:{
                Authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

    }
    updProduct(productId, body){
        return(
            fetch(`${this.path}/products/${productId}`,{
                method: "PATH",
                headers: {
                    Authorization: `Bearer ${this.token}`,
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(body)
              })
        )
    }
    delProduct(productId){
        return (
          fetch(`${this.path}/products/${productId}`,{
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${this.token}`,
            }
          })  
        )
    }
    logIn(body){// войти
        return(fetch(`${this.path}/signin`,{
            method: "POST",
            headers:{
                // authorization: `${this.token}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        })
        )
    }
    singUp(){//зарегистрироваться
        return(fetch(`${this.path}/signup`,{
            method: "POST",
            headers:{
                authorization: `${this.token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": "zavalishka1988@gmail.com",
                "group": "group-7",
                "password": "secter_pasword"
            })
        })
        )
    }
    showProfile(){
       return fetch(`${this.path}/v2/group-7/users/me`, {
        headers: {
            authorization: `Bearer ${this.token}`
        }
       }) 
    }

}
export default Api;