import { Link } from "react-router-dom"

export const NavComponent=()=>{
    return(
        <>
             <Link to='/' className='nav_link'>Главная</Link>
             <div className="dropdown">
             <Link to='/characters/#all' className='nav_link pers_link'>Персонажи</Link>
             <div className="dropdown-content">
                <Link to='/characters/all' className='nav_link'>Все</Link>
                <Link to={`/characters/main_game`} className='nav_link'>Дикая охота</Link>
                <Link to={`/characters/dlc1`} className='nav_link'>Каменные сердца</Link>
                <Link to={`/characters/dlc2`} className='nav_link'>Кровь и вино</Link>
            </div>
             </div>
             <Link to='/monsters' className='nav_link'>Бестиарий</Link>
             <Link to='/catalog' className='nav_link'>Магазин карт</Link>
        </>
       
    )
}