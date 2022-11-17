import { makeAutoObservable } from "mobx";

class CartStore{
    orders=JSON.parse(localStorage.getItem('orders')) || [];
    cart= JSON.parse(localStorage.getItem('cart')) ||  [];

    modalVisible=false;

    constructor(){
        makeAutoObservable(this,undefined,{
            autoBind:true,
        })
    }


    addToOrders(){
        this.orders.push(this.cart);
        localStorage.setItem('orders',JSON.stringify(this.orders));
    }

    addToCart(product){
        
        const foundIndex=this.cart.findIndex(({id})=>product.id===id);
      
        if(foundIndex===-1){
            product.count=1;
            this.cart.push(product);
        }else{
            this.cart[foundIndex].count+=1;
        }

        localStorage.setItem('cart',JSON.stringify(this.cart));
    }

    delFromCart(idDelProduct){
        this.cart=this.cart.filter(({id})=>id!==idDelProduct)
        localStorage.setItem('cart',JSON.stringify(this.cart));
       
    }

    clearCart(){
        this.cart=[];
        localStorage.setItem('cart',JSON.stringify(this.cart));
    }
    get countCart(){
        let totalCount=0;
        this.cart.forEach(({count})=>{
            totalCount+=count;
        })
        return totalCount;
    }


    get getTotalPrice(){
       let totalPrice=0;
        this.cart.forEach(({count,price})=>{
            totalPrice+=count*price;
        });
       
        return totalPrice.toFixed(2);
    }


    setVisible(){
        this.modalVisible=!this.modalVisible;
    }
}

const cartStore=new CartStore();
export default cartStore;