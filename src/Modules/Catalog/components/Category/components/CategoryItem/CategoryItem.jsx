import catalogStore from "../../../../stores/CatalogStore";

export const CategoryItem=({category})=>{
    const {id,cats_title,cats_img}=category;
    const {setCategoryId}=catalogStore;
    const clickHandler=()=>{
       setCategoryId(id);
    }
    return(
        <button className="category_item" style={{
            backgroundImage:`url(${cats_img})`,
           
        }} onClick={clickHandler}>
                {cats_title}
        </button>
    )
}