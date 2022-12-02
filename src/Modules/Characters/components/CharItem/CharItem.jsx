import { Link } from "react-router-dom"

export const CharItem = ({ pers }) => {
    const { id, pers_title, pers_image_preview } = pers;

    return (
        <>
            <Link to={`./${id}`} className='person_link'>

                <div className="card">
                    <div className="front">
                        <img src={pers_image_preview} className='front_img' />
                    </div>
                    <div className="back">
                        <div className="details">
                            <h2 className="person_back_title">{pers_title}</h2>
                        </div>
                    </div>

                </div>
                <div className="person_link_title">
                    {pers_title}
                </div>
            </Link>
        </>

    )
}