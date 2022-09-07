import  {Main}  from "./components/main/main";
import { Next } from "./components/next/next";
import {Route, Routes, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter> 
      <Routes>
          <Route exact path="/"  element={<Main/>}/>
          <Route path="next" element={<Next/>}/>
      </Routes>
    </BrowserRouter> 
  )
}

export default App;
