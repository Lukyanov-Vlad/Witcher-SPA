import { Form, Input, Modal } from "antd";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import connectionStore from "../../../../stores/ConnectionStore/ConnectionStore";

export const FooterTop=()=>{
    const formRef=useRef()
    const{ addEmails }=connectionStore;
   
    const [email,setEmail]=useState('');
  
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
          
          const {reset}=useForm();
    return(
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
    );
}