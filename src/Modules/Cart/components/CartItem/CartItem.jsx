import cartStore from "../../../../stores/CartStore/CartStore";


export const CartItem=({productInCart,index})=>{
    const {delFromCart}=cartStore;
    const {id,title,image,count,price}=productInCart;
    const clickHandler=()=>{
        delFromCart(id);
    }
    return(
        <div className='cart_item'>
                <div className='cart_index'>{index+1}.</div>                        
           
                <div className='cart_product'>
                    <div className='cart_item_wrapper'>
                                            
                        <div className='cart_item_image'><img src={image} alt={title} className='cart_img'/></div>
                            <h3 className='cart_item_title'>{title}</h3>
                        <div className='cart_item_pay_info'> 
                            <p className='cart_item_count'>Count: <span className='bold'>{count} шт.</span></p> 
                            <p className='cart_item_price'>Price: <span className='bold'>{price*count} $</span></p> 
                        </div>
                                                

                        </div>
                            <div className='cart_item_btn'>
                                <button className='del_btn' onClick={clickHandler}>
                        </button></div>
                        </div>                      
                                        
        </div>
    )
}