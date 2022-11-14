import { makeAutoObservable, runInAction } from "mobx";

class LocationStore{
    locationList=undefined;
    loadingLocation=false;
    constructor(){
        makeAutoObservable(this,undefined,{
            autoBind:true,
        })
    }

    async loadLocation(){
        this.loadingLocation=true;
        try{
            const response=await fetch('http://localhost:3001/locations');
            if(response.status>=400){
                throw new Error(`Response Error: ${response.statusText}`)
            }
            const data=await response.json();
            runInAction(()=>{
                this.locationList=[...data];
              
                this.loadingLocation=false;
            })
            
        }catch(err){

        }finally{
            runInAction(()=>{
                this.loadingLocation=false;
            })
        }
    }
}


const locationStore=new LocationStore();
export default locationStore;