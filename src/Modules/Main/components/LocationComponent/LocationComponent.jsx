import Item from "antd/lib/list/Item";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Loader from "../../../../components/Loader/Loader";
import { LocationItem } from "./components/LocationItem";
import locationStore from "./stores/LocationStore"

export const LocationComponent =observer(()=>{
     const {locationList,loadingLocation,loadLocation }=locationStore;
     useEffect(()=>{
        loadLocation();
     },[])
    return(
        <>
            <h2 className="h2_title">Локации</h2>
            {loadingLocation && <Loader />}
            {!loadingLocation && locationList &&
                                 <div className="location_grid">
                                    {locationList.map((locData)=><LocationItem key={locData.id} locData={locData}/>)}
                                </div>
                                }
            
        </>
    )
})