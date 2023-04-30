import { Image } from 'antd'

export const AbilityItem = ({ item }) => {
    const { ability_text, alt, ability_img_s } = item;

    return (
        <div className="ability_item">
            <div className="ability_item_img">
               
                <img src={ability_img_s} alt={alt} className='img_abil' />

            </div>
            <div className="ability_item_text">
                {ability_text}
            </div>
        </div>
    )
}