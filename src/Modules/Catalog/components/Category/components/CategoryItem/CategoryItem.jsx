import catalogStore from "../../../../../../stores/CatalogStore/CatalogStore";

export const CategoryItem = ({ category }) => {
    const { id, cats_title, cats_img } = category;
    const { setCategoryId, setCurrentPage } = catalogStore;
    const clickHandler = () => {
        setCategoryId(id);
        setCurrentPage(1);
    }
    return (
        <button className="category_item" style={{
            backgroundImage: `url(${cats_img})`,

        }} onClick={clickHandler}>
            <span className="category_item_title">{cats_title}</span>
        </button>
    )
}