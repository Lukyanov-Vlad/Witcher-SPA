import { Modal } from 'antd'
import  cartStore  from '../../stores/CartStore/CartStore'
import {observer} from 'mobx-react-lite'
import cartModalStore from './stores/CartModalStore';

export const CartModal=observer(()=>{
    const {cart,getTotalPrice,clearCart}=cartStore;
    const {modalVisible,setVisible}=cartModalStore
    console.log('here');
        const success = () => {
            Modal.success({
            content: 'Заказ оформлен!',
            });
        };
      const handleOk = () => {

        setVisible(false);
        clearCart();
        success();
      };
      const handleCancel = () => {
        setVisible(false);
      };
    return(
     
         <Modal  open={modalVisible} onOk={handleOk} onCancel={handleCancel} className='cart_modal'>
            <h3 className='h3_title'>Ваш заказ:</h3>
           
                <div className="order_details">
                    {cart.map(({id,title,price,count},index)=><li key={index}>{index+1}. {title} - {count} шт. - {price*count} $.</li>)}
                </div>
           
               
                <div className="total_modal_price">
                    <span className='total_modal_price_text'>К оплате:</span> {getTotalPrice} $
                </div>
         </Modal>
           

        
       
    )
})