import { makeAutoObservable } from "mobx"

 
 class TestStore{
    spisok=undefined;
    constructor(){
        makeAutoObservable(this,undefined,{
            autoBind:true,
        })
       
    }
    async loadData(){
        const response= await fetch('http://localhost:3001/cart/1');
        const data= await response.json();
        console.log(data);
        this.spisok=data;
        console.log(this.spisok)
    }
}


const testStore=new TestStore();
export default testStore;