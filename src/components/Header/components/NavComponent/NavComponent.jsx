import { Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react";
import catalogStore from "../../../../stores/CatalogStore/CatalogStore";
import { useRef } from "react";
import charStore from "../../../../Modules/Characters/stores/CharStore";
export const NavComponent=()=>{
    const [burgerClass,setBurgerClass]=useState('btn_menu unclicked');
    const [menuClass,setMenuClass]=useState('nav_wrapper hidden');
    const [isMenuCLicked,setIsMenuCLicked]=useState(false);
    const ref=useRef();

   useEffect(()=>{
   
    ref.current.checked=false;
   },[])
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
    const {setCurrentPageChar}=charStore;   
    
    const clickCharHandler=()=>{
        setCurrentPageChar(1);
        clickLinkHandler();
    }
    const clickLinkHandler=()=>{
        setIsMenuCLicked(!isMenuCLicked);
        ref.current.checked=false;
      
    }
    const сlickСatalogHandler=()=>{
        setCategoryId(undefined);
        setCurrentPage(1);
      
        clickLinkHandler();
    }
    return(
        <div className="navigation">
            <button className={burgerClass} onClick={clickLinkHandler}>
                                <div className='line'></div>
            </button>
            <div className={menuClass}>
                
                <Link to='/' className='nav_link' onClick={clickLinkHandler}>Главная</Link>
                <div className="dropdown">
                <input ref={ref} type="checkbox" id='char_burger_check' />
                <label htmlFor="char_burger_check"   className='nav_link pers_link'>Персонажи</label>
                <div className="dropdown-content">
                    <Link to='/characters/all' className='nav_link all_char_link' onClick={clickCharHandler}>Все</Link>
                    <Link to={`/characters/main_game`} className='nav_link' onClick={clickCharHandler}>Дикая охота</Link>
                    <Link to={`/characters/dlc1`} className='nav_link' onClick={clickCharHandler}>Каменные сердца</Link>
                    <Link to={`/characters/dlc2`} className='nav_link' onClick={clickCharHandler}>Кровь и вино</Link>
                </div>
             
                </div>
                <Link to='/monsters' className='nav_link' onClick={clickLinkHandler}>Бестиарий</Link>
                <Link to='/catalog' className='nav_link' onClick={сlickСatalogHandler}>Магазин карт</Link>
            </div>
        </div>
    )
}