import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Loader } from "../../components/Loader";
import { BestCats } from "./components/BestCats";
import bestiariumStore from "./stores/BestiariumStore"
import '../../styles/monsters.css'
import '../../styles/media/mediaMonsters.css'

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
                <p className="choose_monster_cats">Выберите интересующую категорию: </p>
                <div className="best_cats_wrapper ">
                    {monstersCategoriesLoading && <Loader />}
                    {!monstersCategoriesLoading && mostersCategories && monsterList && mostersCategories.map((item)=><BestCats key={item.id} bestCat={item}/>)}
                    
                   
                </div>

            </div>
        </div>
    )
})