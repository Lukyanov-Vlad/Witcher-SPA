import { Carousel, Image } from 'antd';
import React from 'react';
import { useRef } from 'react';
// import arrow_l from '../../../img/arrow_l.png'
// import arrow_r from '../../../img/arrow_r.png'

export const CarouselComponent = () => {
    const ref = useRef();


    return (
        <div className='carousel_section'>
            <h2 className="h2_title">Скриншоты игры:</h2>
            <p className='carousel_desc'>( Проведите пальцем влево/вправо )</p>
            <div className='carousel_wrapper'>
                <div className='button_left'>
                    <button onClick={() => { ref.current.prev(); }} className='carousel_button'><img src='https://imageup.ru/img168/4062734/arrow_l.png' className='arrow_left' /></button>
                </div>



                <Carousel className="carousel"

                    draggable
                    dots={false}
                    ref={ref}>
                    <div className='carousel_item'>
                        <div className="carousel_item_img">
                            <Image src='https://i.ibb.co/tKxcxxR/screen-shoot1.jpg' className='carousel_img' />
                        </div>
                        <div className="carousel_item_img">
                            <Image src='https://i.ibb.co/GMdG22s/screen-shoot2.jpg' className='carousel_img' />
                        </div>
                        <div className="carousel_item_img">
                            <Image src='https://i.ibb.co/hg5Z8Mr/screen-shoot3.jpg' className='carousel_img' />
                        </div>


                    </div>
                    <div className='carousel_item'>
                        <div className="carousel_item_img">
                            <Image src='https://i.ibb.co/HtD7cMq/screen-shoot4.jpg' className='carousel_img' />
                        </div>
                        <div className="carousel_item_img">
                            <Image src='https://i.ibb.co/XbD3B31/screen-shoot5.jpg' className='carousel_img' />
                        </div>
                        <div className="carousel_item_img">
                            <Image src='https://i.ibb.co/M1y1vCg/screen-shoot6.jpg' className='carousel_img' />
                        </div>
                    </div>
                    <div className='carousel_item'>
                        <div className="carousel_item_img">
                            <Image src='https://i.ibb.co/3SMWntR/screen-shoot7.jpg' className='carousel_img' />
                        </div>
                        <div className="carousel_item_img">
                            <Image src='https://i.ibb.co/8YsnRH6/screen-shoot8.jpg' className='carousel_img' />
                        </div>
                        <div className="carousel_item_img">
                            <Image src='https://i.ibb.co/dgZ1M4H/screen-shoot9.jpg' className='carousel_img' />
                        </div>
                    </div>
                </Carousel>

                <div className='button_right'>
                    <button onClick={() => { ref.current.next(); }} className='carousel_button'><img src='https://imageup.ru/img68/4062735/arrow_r.png' className='arrow_right' /></button>

                </div>

            </div>
        </div>


    );
}

