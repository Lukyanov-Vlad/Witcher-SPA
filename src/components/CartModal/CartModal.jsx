import { Modal } from 'antd'
import cartStore from '../../stores/CartStore/CartStore'
import { observer } from 'mobx-react-lite'
import cartModalStore from './stores/CartModalStore';

export const CartModal = observer(() => {
  const { cart, getTotalPrice, clearCart, addToOrders } = cartStore;
  const { modalVisible, setVisible } = cartModalStore

  const success = () => {
    Modal.success({
      content: 'Заказ оформлен! Ожидайте информацию по доставке!',
    });
  };
  const handleOk = () => {

    setVisible(false);
    addToOrders();
    clearCart();
    success();
  };
  const handleCancel = () => {
    setVisible(false);
  };
  return (

    <Modal open={modalVisible} onOk={handleOk} onCancel={handleCancel} okText='Оплатить' className='cart_modal'>
      <h3 className='h3_title'>Ваш заказ:</h3>

      <div className="order_details">
        {cart.map(({ title, price, count }, index) => <li key={index} className='order_details_item'>{index + 1}. {title} - {count} шт. - {price * count} $.</li>)}
      </div>


      <div className="total_modal_price">
        <span className='total_modal_price_text'>К оплате:</span> {getTotalPrice} $
      </div>
    </Modal>




  )
})