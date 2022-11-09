import { Link, Navigate, useNavigate } from "react-router-dom";

export const BannerComponent =()=>{

    const navigate=useNavigate();
  
    return (
        <div className="banner">
           <a className="banner_btn" href='https://www.thewitcher.com/ru/witcher3' target='_blank'>Начать путешествие</a> 
        </div>
        
    )
}