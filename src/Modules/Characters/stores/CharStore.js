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
           let response=undefined;
           if(persCat!=='all'){
             response=await fetch(`http://localhost:3001/pers?_sort=pers_title&pers_cats_like=${persCat}`);             
           }else{
             response=await fetch('http://localhost:3001/pers?_sort=pers_title');
           }
           
           if(response.status>=400){
            throw new Error(`Response Error: ${response.statusText}`);
           }
           const data=await response.json();
            runInAction(()=>{
                this.charList=[...data];
                const indexOfLastPage=this.currentPage*this.charPerPage;               
                const indexOfFirstPage=indexOfLastPage-this.charPerPage;
                this.currentCharData=this.charList.slice(indexOfFirstPage,indexOfLastPage);
                this.loadingCharStatus=false;
            });
           
        }catch(err){
            console.log(err);
        }finally{
            runInAction(()=>{
                this.loadingCatalogStatus=false;
            })
            
        }
    }
    setCurrentPage(page){

        this.currentPage=page;
    }
}

const charStore=new CharStore();
export default charStore;