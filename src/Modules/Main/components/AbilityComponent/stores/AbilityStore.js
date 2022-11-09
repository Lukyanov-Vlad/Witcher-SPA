import { makeAutoObservable, runInAction } from "mobx"

class AbilityStore{
    abilityList=undefined;
    loadingAbility=false;

    constructor(){
        makeAutoObservable(this,undefined,{
            autoBind:true,
        })
    }
    async loadAbility(){
            this.loadingAbility=true;
            try{
               
                const response=await fetch('http://localhost:3001/abilities');
                if(response.status>=400){
                  
                    throw new Error(`Response Error: ${response.statusText}`)
                }
                const data=await response.json();
                runInAction(()=>{
                this.abilityList=[...data];
                this.loadingAbility=false;
                
                })
            }catch(err){
                console.log(err);
            }finally{
                runInAction(()=>{
                    this.isCategoriesLoading=false;
                })
                
            }
           
    
         
       
    }
}


const abilityStore=new AbilityStore();
export default abilityStore;