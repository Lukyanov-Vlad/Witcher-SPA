import cartStore from "../../stores/CartStore/CartStore"
import '../../styles/cart.css'
import '../../styles/media/mediaCart.css'
import { CartItem } from "./components/CartItem";

import { observer } from 'mobx-react-lite'
import { useState } from "react";
import { CartModal } from "../../components/CartModal";
import cartModalStore from "../../components/CartModal/stores/CartModalStore";

export const Cart = observer(() => {


    const { cart, clearCart, getTotalPrice } = cartStore;
    const { modalVisible, setVisible } = cartModalStore;
    const changeVisible = () => {
        setVisible(!modalVisible);
    }
    const clickHandler = () => {
        clearCart();
    }
    return (
        <div className="main padding_top">
            <div className="container">
                {cart.length === 0 && <h1 className="h1_text_title">Корзина пуста</h1>}
                {cart.length !== 0 && <>
                    <h1 className="h1_text_title">Корзина</h1>

                    <div className="cart_wrapper">
                        {cart && cart.map((item, index) => <CartItem key={item.id} productInCart={item} index={index} />)}
                    </div>
                    <div className="total_price">
                        <span>Итоговая стоимость: </span>{getTotalPrice} $
                    </div>
                    <div className="cart_buttons">
                        <button className="cart_button" onClick={clickHandler}>
                            Очистить корзину
                        </button>
                        <button className="cart_button" onClick={changeVisible}>
                            Оформить заказ
                        </button>
                    </div>
                    <CartModal />
                </>}

            </div>
        </div>
    )
})