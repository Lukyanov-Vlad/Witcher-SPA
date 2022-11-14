import { makeAutoObservable } from "mobx";

class CartModalStore{

   

    modalVisible=false;

    constructor(){
        makeAutoObservable(this,undefined,{
            autoBind:true,
        })
    }


    setVisible(){
        this.modalVisible=!this.modalVisible;
    }
}

const cartModalStore=new CartModalStore();
export default cartModalStore;