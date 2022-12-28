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
                method: "PATCH",
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
                // authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
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
    setLikes(id, flag){
        return fetch(`${this.path}/products/likes/${id}`,{
            method: flag ? "PUT" : "DELETE",
            headers:{
                authorization: `Bearer ${this.token}`
            }
        })
    }

    addMessage(productId, body){
        return fetch(`${this.path}/products/review/${productId}`, {
            method : "POST",
            headers: {
                authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
    
    getMessage(id_prod){
        return fetch(`${this.path}/products/review/${id_prod}`,{
            method : "GET",
            headers: {
                authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json"
            }
        })
    }
    //DELETE https://api.react-learning.ru/products/review/:productId/:reviewId
    delMessage(product_id, review_id){
        return fetch(`${this.path}/products/review/${product_id}/${review_id}`,{
            method : "DELETE",
            headers: {
                authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json"
            }
        }) 
    }
    signUp(body){
        return fetch(`${this.path}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }

}
export default Api;