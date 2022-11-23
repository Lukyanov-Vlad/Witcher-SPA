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
import { CatalogApp } from "./Modules/Catalog/CatalogApp";
import { CharactersApp } from "./Modules/Characters/CharactersApp";
import { BestiariumApp } from "./Modules/Bestiarium/BestiariumApp";


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<Layout />}>
             <Route index element={<Main />}></Route>
             <Route path='/catalog/*' element={<CatalogApp />}></Route>
             <Route path='/cart' element={<Cart />}></Route>
             <Route path='/characters/:persCat/*' element={<CharactersApp />}></Route>
             <Route path='/monsters/*' element={<BestiariumApp />}></Route>            
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
