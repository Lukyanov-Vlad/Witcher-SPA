import { Carousel } from 'antd';
import React from 'react';
import { useRef } from 'react';
import arrow_l from '../../../img/arrow_l.png'
import arrow_r from '../../../img/arrow_r.png'

export const CarouselComponent=()=>{
        const ref=useRef();
        const onChange = (currentSlide) => {
          console.log(currentSlide);
        };
        return (<div className='carousel_wrapper'>
                      <div className='button_left'>
                           <button onClick={()=>{ref.current.prev();}} className='carousel_button'><img src={arrow_l} className='arrow_left'/></button>
                      </div>
                     
                      
                      <Carousel className="carousel"
                          afterChange={onChange} 
                          draggable
                          dots={false}
                          ref={ref}>
                          <div>
                            <h3 className='test'>1</h3>
                          </div>
                          <div>
                            <h3 className='test'>2</h3>
                          </div>
                          <div>
                            <h3 className='test'>3</h3>
                          </div>
                          <div>
                            <h3 className='test'>4</h3>
                          </div>
                        </Carousel>
                      
                        <div className='button_right'>
                            <button onClick={()=>{ref.current.next();}} className='carousel_button'><img src={arrow_r} className='arrow_right'/></button>

                        </div>
          
        </div>
          
        );
}

