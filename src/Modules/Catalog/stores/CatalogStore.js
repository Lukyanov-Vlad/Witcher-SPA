import { makeAutoObservable, runInAction } from "mobx";

class CatalogStore{

    categories=undefined;
    categoryId=undefined;
    catalog=undefined;
    currentPage=1;
    catalogPerPage=12;
    currentCatalogData=undefined;

    loadingCategoriesStatus=false; 
    loadingCatalogStatus=false;


    constructor(){
        makeAutoObservable(this,undefined,{
            autoBind:true,
        })
    }

    async loadCategories(){
      
        this.loadingCategoriesStatus=true;
        try{
            const response=await fetch('http://localhost:3001/card_category');
            if(response.status>=400){
                throw new Error(`Response Error: ${response.statusText}`);
            }
            const data=await response.json();
            runInAction(()=>{
              
                this.categories=[...data];
                this.loadingCategoriesStatus=false;
            })
        }catch(err){
            console.log(err);
        }finally{
            this.loadingCategoriesStatus=false;
        }
       
    }

    async loadCatalog(catsId){
        this.loadingCatalogStatus=true;
       
        try{
           const response=await fetch('http://localhost:3001/cart');
           if(response.status>=400){
            throw new Error(`Response Error: ${response.statusText}`);
           }
           const data=await response.json();
            runInAction(()=>{
                this.catalog=[...data];
                if(catsId){
                   
                    let category=this.categories.find((item)=>item.id===catsId);
                    const {cats_title}=category;
                   
                    const filterCatalog=this.catalog.filter(({deck})=>deck==cats_title);
                    this.catalog=filterCatalog;
                }
               
                const indexOfLastPage=this.currentPage*this.catalogPerPage;
                
                const indexOfFirstPage=indexOfLastPage-this.catalogPerPage;
                this.currentCatalogData=this.catalog.slice(indexOfFirstPage,indexOfLastPage);
                this.loadingCatalogStatus=false;
            });
           
        }catch(err){
            console.log(err);
        }finally{
            this.loadingCatalogStatus=false;
        }
    }



    setCategoryId(newId){
        this.categoryId=newId;
       
    }

    setCurrentPage(page){
      
      
       
        this.currentPage=page;
    }
}

const catalogStore=new CatalogStore();
export default catalogStore;