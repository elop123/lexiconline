import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import {About} from './pages/About'
import {Home} from './pages/Home'
import { NotFoundPage } from "./pages/NotFoundPage";
import { MainLayout } from "./layout/MainLayout";
import { Api } from "./pages/Api";
import "./App.scss";


function App() {
  
  return (
    <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
         <Route index element={<Home />}></Route>
         <Route path="/home" element={<Home />} ></Route>
         <Route path="/about" element={<About />} ></Route>
         <Route path="/api" element={<Api />} ></Route>
         <Route path="*" element={<NotFoundPage />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
