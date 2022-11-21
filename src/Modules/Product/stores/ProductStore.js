import { makeAutoObservable, runInAction } from "mobx";

export class ProductStore{
    
    product={};
    loadingProductStatus=false;
    
    constructor(){
        makeAutoObservable(this,undefined,{
            autoBind:true,
        })
    }

    async loadProduct(id){
       
        this.loadingProductStatus=true;
        try{
            const response=await fetch(`http://localhost:3001/cart/${id}`);
            if(response.status>=400){
                throw new Error(`Response Error: ${response.statusText}`);
            }
            const data=await response.json();
            runInAction(()=>{
              
                this.product={...data};
                this.loadingProductStatus=false;
            })
        }catch(err){
            console.log(err);
        }finally{
            runInAction(()=>{
                this.loadingProductStatus=false;
            })
           
        }
       
    }

  
    
}

// const productStore=new ProductStore();
// export default productStore;