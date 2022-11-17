import { useEffect } from "react";
import { Link } from "react-router-dom"

export const MonsterCategoryItem=({monster})=>{
    
    const {id,monster_title,monster_img_preweiw}=monster;
    return(
        <Link to={`./${id}`} className='monster_category_item_link'>
            <div className="view view-second">
                <img src={monster_img_preweiw} alt={monster_title} width="300" height="200"/>
            <div className="mask"></div>
                <div className="content">
                <h2 id="testimonials">{monster_title}</h2>
                <p></p>
                <button className="info">Читать больше....</button>
                </div>
            </div>
            <div className="monster_item_title">
                {monster_title}
            </div>
          </Link>
    )
}