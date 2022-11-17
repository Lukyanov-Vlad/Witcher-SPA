import { useState } from "react";
import { useEffect } from "react"
import { useParams,useNavigate } from "react-router-dom"
import { ProductStore } from "./stores/ProductStore";
import { Image, Rate } from 'antd'
import {Loader} from "../../components/Loader";
import { observer } from "mobx-react-lite";
import cartStore from "../../stores/CartStore/CartStore";
import '../../styles/product.css'

export const Product=observer(()=>{
    const {idProduct}=useParams();
    const navigate=useNavigate();
    const [productStore]=useState(new ProductStore())
    const {product,loadingProductStatus,loadProduct}=productStore;
    const {title,image,rate,deck,cart_class,power,ability,how_find,price }=product;
    
    useEffect(()=>{
        if(idProduct){
            
            loadProduct(idProduct);
        }
        
    },[]);
    const clickHandler=()=>{
        navigate('../catalog')
    }
    const {addToCart}=cartStore;
    const clickForAddedToCart=()=>{
        addToCart(product);
    }
    return(
        <main className="main padding_top">
                <div className="container">
                    {loadingProductStatus && <Loader />}
                    {!loadingProductStatus && product &&
                        <>
                           
                            <div className="product_wrapper">
                                <div className="product_image_div">
                                    <Image src={image} alt={title} className='product_img'/>
                                </div>

                                <div className="product_info">
                                    <div className="product_rate_div">
                                            <span className='property'>Рейтинг: </span>
                                            <Rate defaultValue={rate} 
                                                    style={{
                                                        color:'#DB3138' 
                                                    }}
                                                    allowHalf
                                                    disabled
                                                    className='product_rate'/>
                                                    ({rate})
                                        </div>
                                    <div className="product_title">
                                        <span className='property'>Карта: </span>{title}
                                    </div>
                                    
                                  
                                    <div className="product_deck">
                                        <span className='property'>Колода: </span>{deck}
                                    </div>
                                    <div className="product_cart_class">
                                        <span className='property'>Класс: </span>{cart_class}
                                    </div>
                                    <div className="product_power">
                                        <span className='property'>Сила: </span>{power}
                                    </div>
                                    <div className="product_ability">
                                        <span className='property'>Особые умения: </span>{ability}
                                    </div>
                                    <div className="product_howFind">
                                        <span className='property'>Получение в игре: </span>{how_find}
                                    </div>
                                    <div className="product_price">
                                        <span className='property'>Цена: </span>{price} $
                                    </div>
                                </div>
                            </div>
                           <div className="product_btns">
                                <button className="product_btn" onClick={clickHandler}>Вернуться в магазин</button>
                                <button onClick={clickForAddedToCart} className="product_btn">В корзину</button>
                           </div>
                           
                        </>
                 }
                   
                    
                </div>
        </main>
    )
})