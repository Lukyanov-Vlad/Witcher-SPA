import { Carousel, Image } from 'antd';
import React from 'react';
import { useRef } from 'react';
// import arrow_l from '../../../img/arrow_l.png'
// import arrow_r from '../../../img/arrow_r.png'

export const CarouselComponent=()=>{
        const ref=useRef();
        
       
        return (
          <>
              <h2 className="h2_title">Скриншоты игры:</h2>
              <div className='carousel_wrapper'>
                            <div className='button_left'>
                                <button onClick={()=>{ref.current.prev();}} className='carousel_button'><img src='https://imageup.ru/img168/4062734/arrow_l.png' className='arrow_left'/></button>
                            </div>
                          
                           
    
                            <Carousel className="carousel"
                                
                                draggable
                                dots={false}
                                ref={ref}>
                                <div className='carousel_item'>
                                  <div className="carousel_item_img">
                                      <Image src='https://imageup.ru/img295/4062099/screen_shoot1.jpg' className='carousel_img'/>
                                  </div>
                                  <div className="carousel_item_img">
                                      <Image src='https://imageup.ru/img26/4062100/screen_shoot2.jpg' className='carousel_img'/>
                                  </div>
                                  <div className="carousel_item_img">
                                      <Image src='https://imageup.ru/img297/4062101/screen_shoot3.jpg' className='carousel_img'/>
                                  </div>
                                  
                                  
                                </div>
                                <div className='carousel_item'>
                                  <div className="carousel_item_img">
                                      <Image src='https://imageup.ru/img109/4062103/screen_shoot4.jpg' className='carousel_img'/>
                                  </div>
                                  <div className="carousel_item_img">
                                      <Image src='https://imageup.ru/img297/4062104/screen_shoot5.jpg' className='carousel_img'/>
                                  </div>
                                  <div className="carousel_item_img">
                                      <Image src='https://imageup.ru/img164/4062105/screen_shoot6.jpg' className='carousel_img'/>
                                  </div>
                                </div>
                                <div className='carousel_item'>
                                  <div className="carousel_item_img">
                                      <Image src='https://imageup.ru/img287/4062106/screen_shoot7.jpg' className='carousel_img'/>
                                  </div>
                                  <div className="carousel_item_img">
                                      <Image src='https://imageup.ru/img67/4062107/screen_shoot8.jpg' className='carousel_img'/>
                                  </div>
                                  <div className="carousel_item_img">
                                      <Image src='https://imageup.ru/img85/4062108/screen_shoot9.jpg' className='carousel_img'/>
                                  </div>
                                </div>
                              </Carousel>
                            
                              <div className='button_right'>
                                  <button onClick={()=>{ref.current.next();}} className='carousel_button'><img src='https://imageup.ru/img68/4062735/arrow_r.png' className='arrow_right'/></button>

                              </div>
                
              </div>
          </> 
            
          
        );
}

