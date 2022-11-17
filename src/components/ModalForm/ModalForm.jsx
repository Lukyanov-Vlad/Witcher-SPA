import { Checkbox, Form, Input, Modal } from "antd"
import TextArea from "antd/lib/input/TextArea"
import { useState } from "react"
import connectionStore from "../../stores/ConnectionStore/ConnectionStore";
import { observer } from "mobx-react-lite";


export const ModalForm=observer(({closeForm})=>{

    const [surname,setSurname]=useState(undefined);

    const [name,setName]=useState(undefined);
    const [email,setEmail]=useState(undefined);
    const [phone,setPhone]=useState(undefined);
    const [message,setMessage]=useState(undefined);
    const {addMessage}=connectionStore
    const clickHandler=(e)=>{
        
        document.body.style.overflow='visible';
        closeForm();
        e.stopPropagation();
    }
  
    const stopProp=(e)=>{
        e.stopPropagation()
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
    

    return( 
        <div className='modal' onMouseDown={(e)=>clickHandler(e)}>
            <div className="modal_wrap" >
                <div className="modal_wrapper" onMouseDown={(e)=>stopProp(e)}>
                    <div className="form_header">
                        <h3 className="h3_title">Свяжитесь с нами</h3>
                        <button className="close_btn" onClick={(e)=>clickHandler(e)}></button>
                    </div>
                    
                    <Form 
                    onFinish={({name,surname,email,phone,message})=>{
                        addMessage({
                            id:performance.now(),
                            surname:surname,
                            name:name,
                            email:email,
                            phone:phone,
                            message:message,
                            
                        });
                        success();
                        closeForm();
                    }

                    }
                    onFinishFailed={
                        ()=>{
                            error();
                        }
                    } >
                        <Form.Item label="Фамилия:"  >
                             <Form.Item name="surname"  
                                rules={
                                        [
                                            { 
                                                required: true, message: 'Пожалуйста введите фамилию!' 
                                            },
                                            { 
                                                whitespace: true, 
                                                message: 'Поле "Фамилия" не может быть пустым'
                                            },
                                            { 
                                                min: 3, 
                                                message: 'Длина фамилии не должна быть меньше трех символов'
                                            }
                                        ]
                                    }
                                hasFeedback
                                
                            >
                                <Input placeholder="Введите фамилию..." onChange={(event) => setSurname(event.target.value)} className='form_input'/>
                             </Form.Item>
                        </Form.Item>
                        <Form.Item label="Имя:">
                            <Form.Item name="name"   
                                rules={
                                        [
                                            { 
                                                required: true, message: 'Пожалуйста введите имя!' 
                                            },
                                            { 
                                                whitespace: true, 
                                                message: 'Поле "Имя" не может быть пустым'
                                            },
                                            { 
                                                min: 3, 
                                                message: 'Длина имени не должна быть меньше трех символов'
                                            }
                                        ]
                                    }
                                hasFeedback
                            >
                                <Input placeholder="Введите имя..." onChange={(event) => setName(event.target.value)} className='form_input'/>
                            </Form.Item>
                            
                        </Form.Item>
                        <Form.Item label="Email:" >
                            <Form.Item name="email"   
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
                                <Input placeholder="Введите email..." className='form_input'/>
                            </Form.Item>
                           
                        </Form.Item>
                       
                        <Form.Item label="Телефон:"  >
                            <Form.Item name="phone"  
                                rules={
                                        [
                                            { 
                                                required: true, message: 'Пожалуйста введите телефон!' 
                                            },
                                            { 
                                                whitespace: true, 
                                                message: 'Поле "Телефон" не может быть пустым'
                                            },
                                            { 
                                                min: 13, 
                                                message: 'Длина телефона не должна быть меньше 13-ти символов'
                                            },
                                            {
                                                type: ''
                                            }
                                        ]
                                    }
                                hasFeedback
                            >
                                <Input placeholder="Введите телефон..." className='form_input'/>   
                            </Form.Item>
                          
                        </Form.Item>
                        <Form.Item label="Ваше сообщение:" >
                            <Form.Item name="message"  className="text_area_item"
                                rules={
                                        [
                                            { 
                                                required: true, message: 'Пожалуйста введите сообщение!' 
                                            },
                                            { 
                                                whitespace: true, 
                                                message: 'Текст сообщения  не может быть пустым'
                                            },
                                            { 
                                                min: 3, 
                                                message: 'Длина сообщения не должна быть меньше трех символов'
                                            }
                                        ]
                                    }
                                hasFeedback
                            >
                                <textarea placeholder="Введите ваше сообщение..." className="form_area" />
                            </Form.Item>
                            
                        </Form.Item>
                        
                             <Form.Item name="aggreement"  
                                valuePropName="checked"
                                rules={
                                        [
                                            { 
                                                required: true, message: 'Пожалуйста подтвердите согласие с политикой конфиденциальности!' 
                                            },
                                           
                                        ]
                                    }
                                hasFeedback
                               
                            >
                                <Checkbox className="modal_checkbox">
                                    {" "}
                                    Согласен с <a href='https://regulations.cdprojektred.com/ru/privacy_policy' target='_blank'>Политикой Конфиденциальности</a>
                                </Checkbox>
                             </Form.Item>
                        
                        <Form.Item  name="send">
                            <button   className="send_modal_btn" htmltype='submit'>Отправить</button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            
        </div>
    )
})