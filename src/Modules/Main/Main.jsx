
import { useEffect } from "react";
import testStore from "./testStore";
import { observer } from "mobx-react-lite";
import { Image } from 'antd'
import { CarouselComponent } from './components/CarouselComponent'
import { BannerComponent } from "./components/BannerComponent";
import { HelloTrailerComponent } from "./components/HelloTrailerComponent";
import { AbilityComponent } from "./components/AbilityComponent";
import { LocationComponent } from "./components/LocationComponent/LocationComponent";


export const Main =observer(()=>{

    return(
        <main className="main">
             <BannerComponent />
             <div className="container">
               <HelloTrailerComponent />
               {/* <AbilityComponent /> */}
               <LocationComponent />
               {/* <CarouselComponent /> */}

             </div>    
             
             
        </main>
   )
})