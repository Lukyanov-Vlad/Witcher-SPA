import { Link, useParams } from "react-router-dom"
import { Image } from "antd";
import { useState } from "react";
import { MonsterStore } from './stores/MonsterStore'
import { useEffect } from "react";
import {Loader} from "../../components/Loader";
import { observer } from "mobx-react-lite";

export const Monster=observer(()=>{
    const {idMonster}=useParams();
   
    const [monsterStore]=useState(new MonsterStore());
    const {monster,loadingMonsterStatus,loadMonster}=monsterStore;
    useEffect(()=>{
        loadMonster(idMonster);
    },[]);
    const {monster_title,monster_img,monster_epigraph,monster_epigraph_desc,monster_desc}=monster;
    return(
        <div className="main padding_top">
            <div className="container">
                {loadingMonsterStatus && <Loader />}
                {!loadingMonsterStatus && monster && <div className="monster_wrapper">
                        <div className="monster_page_img">
                            <Image src={monster_img} alt={monster_title} className="monster_page_image"/>
                        </div>
                        <div className="moster_page_epigraph">
                            <p className="moster_page_epigraph_text">" {monster_epigraph} "</p>
                            <p className="moster_page_epigraph_desc">{monster_epigraph_desc}</p>
                        </div> 
                        <div className="monster_page_text" 
                        dangerouslySetInnerHTML={
                                {
                                __html: monster_desc
                                }
                                }></div> 
                       <Link to='../monsters' className="monster_page_link">Вернуться в Бестиарий</Link>
                </div> }
               
            </div>
        </div>
    )
})