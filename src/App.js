import { Route, Routes } from "react-router-dom";
import { Cart } from "./Modules/Cart";
import { Catalog } from "./Modules/Catalog";

import { Layout } from "./Modules/Layout";
import { Main } from "./Modules/Main";
import { Product } from "./Modules/Product";
import { Characters } from './Modules/Characters'
import { Person } from "./Modules/Person/Person";
import { Bestiarium } from "./Modules/Bestiarium";
import { Monster } from "./Modules/Monster";


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<Layout />}>
              <Route index element={<Main />}></Route>

              <Route path='/catalog' element={<Catalog />}></Route>
              <Route path='/catalog/:idProduct' element={<Product />}></Route>

              <Route path='/cart' element={<Cart />}></Route>

             
              <Route path='/characters/:persCat' element={<Characters />}></Route>
              <Route path='/characters/:persCat/:personId' element={<Person />}></Route>

             <Route path='/monsters' element={<Bestiarium />}></Route>
             <Route path='/monsters/:idMonster' element={<Monster />}></Route>
             
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
