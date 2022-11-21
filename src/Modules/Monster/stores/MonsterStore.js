import { makeAutoObservable,runInAction } from "mobx";

export class MonsterStore{
    monster={};
    loadingMonsterStatus=false;

    constructor(){
        makeAutoObservable(this,undefined,{
            autoBind:true,
        })
    }

    async loadMonster(id){
        this.loadingMonsterStatus=true;
        try{
            const response=await fetch(`http://localhost:3001/monsters/${id}`);
            if(response.status>=400){
                throw new Error(`Response Error: ${response.statusText}`);
            }
            const data=await response.json();
            runInAction(()=>{
              
                this.monster={...data};
                this.loadingMonsterStatus=false;
            })
        }catch(err){
            console.log(err);
        }finally{
            runInAction(()=>{
                this.loadingMonsterStatus=false;
            })
           
        }
    }
}