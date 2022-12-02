import { Route, Routes } from "react-router-dom"
import { Person } from "../Person/Person"

import { Characters } from "./Characters"

export const CharactersApp = () => {
    return (
        <Routes>
            <Route index path='/' element={<Characters />}></Route>
            <Route path='/:personId' element={<Person />}></Route>
        </Routes>
    )
}