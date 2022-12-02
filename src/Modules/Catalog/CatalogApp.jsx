import { Route, Routes } from "react-router-dom"
import { Product } from "../Product"
import { Catalog } from "./Catalog"

export const CatalogApp = () => {
    return (
        <Routes>
            <Route index path='/' element={<Catalog />}></Route>
            <Route path='/:idProduct' element={<Product />}></Route>
        </Routes>
    )
}