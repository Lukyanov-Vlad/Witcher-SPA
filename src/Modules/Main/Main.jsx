
import { useEffect } from "react";
import testStore from "./testStore";
import { observer } from "mobx-react-lite";
import { Image } from 'antd'
import { CarouselComponent } from './components/CarouselComponent'

export const Main =observer(()=>{
    const {spisok,loadData}=testStore;

    useEffect(()=>{
        loadData();
    },[])
    return(
        <div className="container">
             <h1>Main</h1>
             <Image src="../../../img/Vector.png"/>
             <CarouselComponent />
            {/* {spisok && spisok.map(({id,title,image})=>
            <>
                <div>{title}</div>
                <img key={id} src={image}/>
            </>
            
               
            )} */}
        </div>
   )
})