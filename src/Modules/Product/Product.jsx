import { useState } from "react";
import { useEffect } from "react"
import { useParams,useNavigate } from "react-router-dom"
import { ProductStore } from "./stores/ProductStore";
import { Image } from 'antd'
import Loader from "../../components/Loader/Loader";
import { observer } from "mobx-react-lite";
import cartStore from "../../stores/CartStore/CartStore";

export const Product=observer(()=>{
    const {idProduct}=useParams();
    const navigate=useNavigate();
    const [productStore]=useState(new ProductStore())
    const {product,loadingProductStatus,loadProduct}=productStore;
    const {title,image,how_find }=product;
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
                        <div className="product_wrapper">
                            <button className="return_btn" onClick={clickHandler}>Вернуться в магазин</button>
                            <div className="product_image_div">
                                <Image src={image} alt={title}/>
                            </div>
                            <div className="product_title">
                                {title}
                            </div>
                            <div className="product_howFind">
                                {how_find}
                            </div>
                            <button onClick={clickForAddedToCart}>В корзину</button>
                        </div>
                 }
                   
                    
                </div>
        </main>
    )
})