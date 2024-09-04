import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {About} from './pages/About'
import {Home} from './pages/Home'
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  
  return (
    <>
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
