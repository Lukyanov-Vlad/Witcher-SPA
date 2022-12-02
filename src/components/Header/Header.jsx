import { Link } from "react-router-dom"
import cartStore from "../../stores/CartStore/CartStore"
import { NavComponent } from "./components/NavComponent"
import { observer } from 'mobx-react-lite'


export const Header = observer(() => {
    const { cart, countCart } = cartStore;

    return (
        <header className="header">
            <div className="container">
                <div className="header_wrapper">
                    <div className="header_logo">
                        <Link to='/' ><img src='https://imageup.ru/img7/4060857/logo_main.png' alt='Главная страница' className="log_img" /></Link>
                    </div>
                    <div className="nav_and_cart">

                        <NavComponent />
                        <Link to='/cart' className='cart_link'>
                            {cart.length !== 0 && <div className="count_in_cart">{countCart}</div>}
                        </Link>
                    </div>

                </div>


            </div>



        </header>
    )
})