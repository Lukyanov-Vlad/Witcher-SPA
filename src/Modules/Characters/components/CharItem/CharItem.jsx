import { Link } from "react-router-dom"

export const CharItem=({pers})=>{
    const {id,pers_title,pers_image_preview}=pers;
    console.log(pers_title)
    return(
        <>
            <Link to={`./${id}`} className='person_link'>
                
                    <div class="card">
                        <div class="front">
                            <img src={pers_image_preview} className='front_img'/>
                        </div>
                        <div class="back">
                            <div class="details">
                                <h2>{pers_title}</h2>
                            </div>
                        </div>
                   
                    </div>
	        </Link>
        </>
       
    )
}