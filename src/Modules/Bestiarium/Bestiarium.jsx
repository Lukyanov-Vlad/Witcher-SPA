import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import { BestCats } from "./components/BestCats";
import bestiariumStore from "./stores/BestiariumStore"
import '../../styles/monsters.css'

export const Bestiarium =observer(()=>{
    const {mostersCategories,monstersCategoriesLoading,loadMosterCategories,loadMonsters,monsterList}=bestiariumStore;
    useEffect(()=>{
        loadMosterCategories();
       
    },[])
    useEffect(()=>{
       
        loadMonsters();  
        
   
    },[]);
    return(
        <div className="main padding_top">
            <div className="container">
                <h1 className="h1_text_title">Бестиарий</h1>
                <div className="best_cats_wrapper">
                    {monstersCategoriesLoading && <Loader />}
                    {!monstersCategoriesLoading && mostersCategories && monsterList && mostersCategories.map((item)=><BestCats key={item.id} bestCat={item}/>)}
                    
                   
                </div>
                <div className="div1">
                    
                </div>
            </div>
        </div>
    )
})