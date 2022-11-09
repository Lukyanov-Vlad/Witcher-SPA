import { Link } from "react-router-dom"

export const NavComponent=()=>{
    return(
        <>
             <Link to='/' className='nav_link'>Главная</Link>
             <Link to='/characters' className='nav_link'>Персонажи</Link>
             <Link to='/monsters' className='nav_link'>Бестиарий</Link>
             <Link to='/monsters' className='nav_link'>Магазин карт</Link>
        </>
       
    )
}