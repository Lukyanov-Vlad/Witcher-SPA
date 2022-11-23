import { useEffect } from "react";
import { useParams } from "react-router-dom"
import charStore from "./stores/CharStore";
import {observer} from 'mobx-react-lite'
import {CharItem} from './components/CharItem'
import { Loader } from "../../components/Loader";
import {Pagination} from 'antd'
import '../../styles/characters.css'
import '../../styles/media/mediaCharacters.css'


export const Characters =observer(()=>{
    const {persCat}=useParams();
   
    
    const {charList,loadChar,loadingCharStatus,charPerPage,currentPage,setCurrentPage,currentCharData,persPageTitle,loadingPersTitle,loadTitle}=charStore;
    useEffect(()=>{
        
        loadTitle(persCat);
    },[persCat])
    useEffect(()=>{
        setCurrentPage(1);
        loadChar(persCat);
    },[persCat])
    useEffect(()=>{ 
  
        loadChar(persCat);
        
    },[currentPage])
    return(
        <div className="main padding_top">

            <div className="container">
                {!loadingPersTitle && persPageTitle &&  <h1 className="h1_text_title char_title">{persPageTitle}</h1>}
               
                <div className="char_wrapper">

                    {loadingCharStatus && <Loader />}
                    {!loadingCharStatus && charList && currentCharData.map((item)=><CharItem key={item.id} pers={item}/>)}
                </div>
                {!loadingCharStatus && charList && <Pagination onChange={(value)=>{setCurrentPage(value)}}
                                                   
                                                   total={charList.length}
                                                   pageSize={charPerPage}
                                                   current={currentPage}
                                                   />}
            </div>
        </div>
    )
   
})