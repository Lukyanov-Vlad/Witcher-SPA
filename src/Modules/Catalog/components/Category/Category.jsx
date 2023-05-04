import { useEffect } from "react"
import catalogStore from "../../../../stores/CatalogStore/CatalogStore"
import { Loader } from "../../../../components/Loader"
import { observer } from 'mobx-react-lite'
import { CategoryItem } from "./components/CategoryItem"
import { useState } from "react"

export const Category = observer(() => {
    const { categories, loadingCategoriesStatus, loadCategories, setCategoryId } = catalogStore;
    const [radius, setRadius] = useState(true);
    useEffect(() => {
        if (document.getElementById('categories_btn')) {
            if (radius) {
                document.getElementById('categories_btn').style.borderRadius = '5px';
            } else {
                document.getElementById('categories_btn').style.borderRadius = '0px';
            }
        }
    }, [radius])

    useEffect(() => {
        loadCategories();
    }, []);

    const clickHandler = () => {
        setCategoryId(undefined);
    }
    return (<>
        {loadingCategoriesStatus && <Loader />}
        {!loadingCategoriesStatus && categories &&
            <div className="caregories">
                <label id="categories_btn" htmlFor='categories_checkbox' onClick={() => { setRadius(!radius) }}>Выбрать колоду</label>
                <input type="checkbox" id='categories_checkbox' />
                <div id="category_wrapper">
                    <div className="category_items">
                        {categories.map((category) => <CategoryItem
                            key={category.id}
                            category={category}
                        />)}
                    </div>
                    <button className="category_all_btn" onClick={clickHandler}>Показать все карты</button>
                </div>
            </div>

        }

    </>)
})