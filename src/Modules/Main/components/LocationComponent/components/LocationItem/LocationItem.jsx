import { Image } from "antd";


export const LocationItem = ({ locData }) => {
    const { loc_title, loc_desc, loc_img } = locData;
    return (<div className="location_item">
        <div className="location_img">
            <Image src={loc_img} alt={loc_title} className='loc_img' />
        </div>
        <h3 className="h3_title">{loc_title}</h3>
        <div className="location_description">
            {loc_desc}
        </div>
    </div>)

}