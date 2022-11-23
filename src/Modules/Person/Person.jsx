import { useEffect } from "react";
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import {Loader} from "../../components/Loader";
import { PersonStore } from "./stores/PersonStore"
import { Image } from "antd";
import { observer } from "mobx-react-lite";

export const Person=observer(()=>{
    const {persCat,personId}=useParams();
    const navigate=useNavigate();
    const [personStore]=useState(new PersonStore());
   
    const{person,loadingPersonStatus,loadPerson}  =personStore;  
    const {pers_title,pers_image,pers_desc}=person;
    useEffect(()=>{
        loadPerson(personId);
    },[])
    const clickHandler=()=>{
        navigate(`..`);
    }
    return(
        <div className="main padding_top">
            <div className="container">
                {loadingPersonStatus && <Loader />}
                {!loadingPersonStatus && person && 
                    <>
                        <div className="person_wrapper">
                            <div className="person_img">
                                <Image src={pers_image} alt={pers_title} className='person_image'/>
                            </div>
                            <div className="person_info" dangerouslySetInnerHTML={{__html:pers_desc}}>
                               
                            </div>
                        </div>
                        <div className="return_to_char">
                            <button className="return_to_char_btn" onClick={clickHandler}>Вернуться к списку персонажей</button>
                        </div>
                    </>
                }
                
            </div>
        </div>
    )
})