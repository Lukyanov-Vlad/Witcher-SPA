import { makeAutoObservable } from "mobx";
import {runInAction} from 'mobx'
class CharStore{

    charList=undefined;
    loadingCharStatus=false;
    currentPage=1;
    charPerPage=12;
    currentCharData=undefined;

    constructor(){
        makeAutoObservable(this,undefined,{
            autoBind:true,
        })
    }

    async loadChar(persCat){
        this.loadingCharStatus=true;
       
        try{
           const response=await fetch('http://localhost:3001/pers');
           if(response.status>=400){
            throw new Error(`Response Error: ${response.statusText}`);
           }
           const data=await response.json();
            runInAction(()=>{
                this.charList=[...data];
                console.log(this.charList)
                if(persCat!=='all'){
                   
                  
                   
                    const filterChar=this.charList.filter(({pers_cats})=>pers_cats==persCat);
                    this.charList=filterChar;
                }
               
                const indexOfLastPage=this.currentPage*this.charPerPage;
                
                const indexOfFirstPage=indexOfLastPage-this.charPerPage;
                this.currentCharData=this.charList.slice(indexOfFirstPage,indexOfLastPage);
                this.loadingCharStatus=false;
            });
           
        }catch(err){
            console.log(err);
        }finally{
            this.loadingCatalogStatus=false;
        }
    }
    setCurrentPage(page){

        this.currentPage=page;
    }
}

const charStore=new CharStore();
export default charStore;