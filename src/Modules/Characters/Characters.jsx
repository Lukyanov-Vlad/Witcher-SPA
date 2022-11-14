import { useEffect } from "react";
import { useParams } from "react-router-dom"
import charStore from "./stores/CharStore";
import {observer} from 'mobx-react-lite'
import {CharItem} from './components/CharItem'
import Loader from "../../components/Loader/Loader";
import {Pagination} from 'antd'
import '../../styles/characters.css'


export const Characters =observer(()=>{
    const p=useParams();
    console.log(p);
    const {persCat}=p
    const {charList,loadChar,loadingCharStatus,charPerPage,currentPage,setCurrentPage,currentCharData}=charStore;
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
                <h1 className="h1_text_title">Персонажи</h1>
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