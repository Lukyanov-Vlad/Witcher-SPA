import { Route, Routes } from "react-router-dom"

import { Monster } from "../Monster";
import { Bestiarium } from "../Bestiarium";


export const BestiariumApp = () => {
    return (
        <Routes>
            <Route index path='/' element={<Bestiarium />}></Route>
            <Route path='/:idMonster' element={<Monster />}></Route>
        </Routes>
    )
}