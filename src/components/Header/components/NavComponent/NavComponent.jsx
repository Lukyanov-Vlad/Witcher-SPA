import { Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react";
import catalogStore from "../../../../stores/CatalogStore/CatalogStore";
export const NavComponent=()=>{
    const [burgerClass,setBurgerClass]=useState('btn_menu unclicked');
    const [menuClass,setMenuClass]=useState('nav_wrapper hidden');
    const [isMenuCLicked,setIsMenuCLicked]=useState(false);
   useEffect(()=>{
  
        if(isMenuCLicked){
            setBurgerClass('btn_menu clicked');
            setMenuClass('nav_wrapper visible')
        }else{
            setBurgerClass('btn_menu unclicked');
            setMenuClass('nav_wrapper hidden');
        }
   },[isMenuCLicked])
   
    const {setCategoryId, setCurrentPage} =catalogStore;
    const ClickHanler=()=>{
        setCategoryId(undefined);
        setCurrentPage(1);
        setIsMenuCLicked(false);
        
    }
    return(
        <div className="navigation">
            <button className={burgerClass} onClick={()=>{setIsMenuCLicked(!isMenuCLicked)}}>
                                <div className='line'></div>
            </button>
            <div className={menuClass}>
                
                <Link to='/' className='nav_link' onClick={()=>{setIsMenuCLicked(false)}}>Главная</Link>
                <div className="dropdown">
                <p  className='nav_link pers_link'>Персонажи</p>
                <div className="dropdown-content">
                    <Link to='/characters/all' className='nav_link' onClick={()=>{setIsMenuCLicked(false)}}>Все</Link>
                    <Link to={`/characters/main_game`} className='nav_link' onClick={()=>{setIsMenuCLicked(false)}}>Дикая охота</Link>
                    <Link to={`/characters/dlc1`} className='nav_link' onClick={()=>{setIsMenuCLicked(false)}}>Каменные сердца</Link>
                    <Link to={`/characters/dlc2`} className='nav_link' onClick={()=>{setIsMenuCLicked(false)}}>Кровь и вино</Link>
                </div>
                </div>
                <Link to='/monsters' className='nav_link' onClick={()=>{setIsMenuCLicked(false)}}>Бестиарий</Link>
                <Link to='/catalog' className='nav_link' onClick={ClickHanler}>Магазин карт</Link>
            </div>
        </div>
    )
}