import { Route, Routes } from "react-router-dom";
import { Characters } from "./Modules/Characters";
import { Layout } from "./Modules/Layout";
import { Main } from "./Modules/Main";



function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Main />}></Route>
            <Route path='/characters' element={<Characters />}></Route>
            
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
