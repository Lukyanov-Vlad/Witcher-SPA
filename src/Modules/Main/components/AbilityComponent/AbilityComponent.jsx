import { useEffect } from "react";
import abilityStore from "./stores/AbilityStore"
import { observer }  from 'mobx-react-lite'
import { AbilityItem } from "./components/AbilityItem";
import Loader from "../../../../components/Loader/Loader";


export const AbilityComponent=observer(()=>{
    const {abilityList,loadAbility,loadingAbility} =abilityStore;
    console.log(loadingAbility)
    useEffect(()=>{
        loadAbility();
    },[])
   const a=10;
    return(
        <>
              
               {loadingAbility && <Loader />}
               {!loadingAbility && abilityList && <section className=" ability">
                                        <h2 className="h2_title">Особенности игры:</h2>
                                        <div className="ability_items">
                                            {abilityList.map((item)=><AbilityItem key={item.id} item={item}/>)}
                                        </div>
                                 </section>} 
             
                                
        </>
       
    )
})