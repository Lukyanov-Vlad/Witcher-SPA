import { Link } from "react-router-dom"

export const Header=()=>{
    return(
        <header className="header">
            <div className="container">
                <div className="header_wrapper">
                    <div className="header_logo">
                        <Link to='/' ><img src='https://imageup.ru/img7/4060857/logo_main.png' alt='Главная страница' className="log_img"/></Link>
                    </div>
                    <nav className="header_nav">
                        <Link to='/' className='nav_link'>Main</Link>
                        <Link to='/characters' className='nav_link'>Персонажи</Link>
                        <Link to='/monsters' className='nav_link'>Бестиарий</Link>
                        <Link to='/monsters' className='nav_link'>Магазин карт</Link>
                    </nav>
                    <Link to='/cart' className='cart_link'></Link>
                </div>
            </div>
           
            
        </header>
        )
}