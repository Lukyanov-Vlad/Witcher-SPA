import { Modal } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavComponent } from "../../../Header/components/NavComponent";
import { ModalForm } from "../../../ModalForm";

export const FooterBottom = () => {

    const [visible, setVisible] = useState(false);
    const changeVisible = () => {

        if (!visible === false) {
            document.body.style.overflow = 'auto';
        }
        else {
            document.body.style.overflow = 'hidden';
        }
        setVisible(!visible);
    }
    const error = () => {
        Modal.error({
            title: 'Ошибка',
            content: 'Проверьте введенные данные',
        });
    };

    const success = () => {
        Modal.success({
            content: 'Данные отправлены успешно!',
        });
    };

    return (
        <div className="footer_bottom">
            <div className="container footer_bottom_wrapper">
                <div className="footer_bottom_menu">
                    <h3 className="h3_title">Навигация</h3>
                    <NavComponent />
                    <Link to='/characters/all' className='nav_link' >Персонажи</Link>
                </div>
                <div className="footer_bottom_contacts">
                    <h3 className="h3_title">Контакты</h3>
                    <a href='https://goo.gl/maps/yQAiPT6bCqVV7wVU9' target='_blank' className='footer_link'>Варшава, ул. Jagiellońska 74, 03-301</a>
                    <a href='tel:+1234567890' className='footer_link'><span className='footer_text'>+123 456 7890</span></a>
                    <button className='footer_link' onClick={changeVisible}>Обратная связь</button>
                </div>
                <div className="footer_bottom_logo">
                    <Link to='/' className="footer_logo_link"><img className='footer_logo_img' src="https://i.ibb.co/nL97KFV/1200px-cd-projekt-logosvg.png" alt="CD Project Red" /></Link>
                </div>
            </div>
            {visible && <ModalForm closeForm={changeVisible} />}
        </div>

    )
}