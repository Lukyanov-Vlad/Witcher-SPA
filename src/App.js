import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Characters } from "./Modules/Characters/Characters";
import { Layout } from "./Modules/Layout/Layout";
import { Main } from "./Modules/Main/Main";



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
