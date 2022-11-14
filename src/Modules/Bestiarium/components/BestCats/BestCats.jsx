import Loader from "../../../../components/Loader/Loader";
import bestiariumStore from "../../stores/BestiariumStore";
import { MonsterCategoryItem } from "./MonsterCategoryItem/MonsterCategoryItem";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useState } from "react";

export const BestCats=observer(({bestCat})=>{
    const {id,name_moster_cats} =bestCat;
    const{loadingMonstersByCategory,monstersByCategory,loadMonstersByCategory,monsterList,loadMonsters}=bestiariumStore;
    const [filterMonster,setFilterMonster]=useState([]);
    useEffect(()=>{
       
            setFilterMonster(monsterList.filter(({moster_cats})=>moster_cats===name_moster_cats)) ;
            
       
    },[]);
  
    return( <div className='dropdoun_monsters'>
             
             <label className="monster_cats_btn" htmlFor={id}>{name_moster_cats}</label>
             <input type="checkbox" id={id} className="hide"/>
             {/* <div className="monster_cats_btn">{name_moster_cats}</div>
             <div className="monster_cats_content"> */}
                <div id="monster_category_item">
                        {loadingMonstersByCategory && <Loader />} 
                        {!loadingMonstersByCategory &&  monsterList && filterMonster.map((item)=><MonsterCategoryItem key={id} monster={item}/>)}
                        
                </div>
                
             </div>
             
            // </div>
            
            
    )
})