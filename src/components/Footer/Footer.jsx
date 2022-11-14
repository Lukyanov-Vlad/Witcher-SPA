import { useState } from "react"
import { Link } from "react-router-dom"
import { NavComponent } from "../Header/components/NavComponent"
import { ModalForm } from "../ModalForm"
import { Form, Input, Modal } from "antd"
import connectionStore from "../../stores/ConnectionStore/ConnectionStore"

import {useForm} from 'react-hook-form'
import { useRef } from "react"

export const Footer =()=>{
    const formRef=useRef()
    const{ addEmails }=connectionStore;
    const [visible,setVisible]=useState(false);
    const [email,setEmail]=useState('');
    const changeVisible=()=>{
       
        if(!visible===false){
            document.body.style.overflow='auto';
        }
        else{
            document.body.style.overflow='hidden';
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
              content: 'Данные оттправлены успешно!',
            });
          };
          
          const {reset}=useForm();
    return (
        <footer className="footer">
          
                <div className="footer_top">
                    <div className="container">
                        <h3 className="h3_title"> Будьте в курсе  всех обновлений на сайте </h3>
                        <Form  ref={formRef} 
                            onFinish={({email})=>{
                               
                                addEmails(email);
                                success();
                                reset();
                                formRef.current.resetFields();
                               
                            }

                            }
                            onFinishFailed={
                                ()=>{
                                    error();

                                }
                            } className="form_email">
                        <Form.Item name="email"  className="footer_top_form" 
                               rules={
                                [
                                    { 
                                        required: true, message: 'Пожалуйста введите email' 
                                    },
                                    { 
                                        whitespace: true, 
                                        message: 'Поле "Email" не может быть пустым'
                                    },
                                    { 
                                        min: 5, 
                                        message: 'Длина Email не должна быть меньше пяти символов'
                                    },
                                    {
                                        type: 'email',
                                        message: 'Некорректный email'
                                    }
                                    
                                ]
                            }
                                hasFeedback
                            >
                                <Input value={email} placeholder="Введите свой email..." onChange={(event) => setEmail(event.target.value)}  className="input_email"
                                 
                                   
                                />
                             </Form.Item>
                             <Form.Item  name="send_email">
                                    <button htmltype="submit"  className="button_email" >Присоединиться</button>
                             </Form.Item>
                    </Form>
                                   
                                  
                           
                    </div>
                </div>
                <div className="footer_bottom">
                     <div className="container footer_bottom_wrapper">
                        <div className="footer_bottom_menu">
                            <h3 className="h3_title">Навигация</h3>
                            <NavComponent />
                        </div>
                        <div className="footer_bottom_contacts">
                            <h3 className="h3_title">Контакты</h3>
                            <a href='https://goo.gl/maps/yQAiPT6bCqVV7wVU9' target='_blank' className='footer_link'>Варшава, ул. Jagiellońska 74, 03-301</a>
                            <a href='tel:+1234567890' className='footer_link'><span className='footer_text'>+123 456 7890</span></a>
                            <button  className='footer_link' onClick={changeVisible}>Обратная связь</button>
                        </div>
                        <div className="footer_bottom_logo">
                            <Link to='/'><img className='footer_logo_img' src="https://imageup.ru/img215/4065132/1200px-cd_projekt_logosvg.png" alt="CD Project Red"/></Link>
                        </div>
                    </div>
                </div>
                <div className="footer_under">
                    <div className="container">
                        <div className="footer_under_left">
                            <div className="footer_under_left_icons">
                                <a href="https://www.facebook.com" className="footer_under_left_ico"><img src="https://imageup.ru/img149/4065140/facebook.png" alt="Facebook" /></a>
                                <a href="https://www.instagram.com/" className="footer_under_left_ico"><img src="https://imageup.ru/img165/4065141/instagram.png" alt="Instagram" /></a>
                                <a href="https://twitter.com/?lang=ru" className="footer_under_left_ico"><img src="https://imageup.ru/img169/4065142/twitter.png" alt="Twitter" /></a>
                                <a href="https://www.youtube.com/" className="footer_under_left_ico"><img src="https://imageup.ru/img221/4065143/youtube.png" alt="youtube" /></a>
                            </div>
                        </div>
                        <div className="footer_under_right">
                                 © 2022 All rights reserved.
                        </div>
                    </div>
                </div>
                {visible && <ModalForm closeForm={changeVisible}/>}   
               
                  
                
        </footer>
       
        
    )
}