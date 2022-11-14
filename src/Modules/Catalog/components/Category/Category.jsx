import { useEffect } from "react"
import catalogStore from "../../stores/CatalogStore"
import Loader from "../../../../components/Loader/Loader"
import { observer }  from 'mobx-react-lite'
import { CategoryItem } from "./components/CategoryItem"

export const Category=observer(()=>{
    const {categories,loadingCategoriesStatus,loadCategories,setCategoryId}=catalogStore;
    
    useEffect(()=>{
        loadCategories();
    },[]);
    const clickHandler=()=>{
        setCategoryId(undefined);
    }
    return (<>
          {loadingCategoriesStatus && <Loader />}
          {!loadingCategoriesStatus && categories && <div className="category_wrapper">
                                                            {categories.map((category)=><CategoryItem 
                                                                                            key={category.id}
                                                                                            category={category}
                                                                                        />)}
                                                     </div>
           }
           <button className="category_all_btn" onClick={clickHandler}>Показать все категории</button>
    </>)
})