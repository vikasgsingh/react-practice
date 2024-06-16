import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Component/About';
import Menu from './Component/Menu';
import Contact from './Component/Contact';
function App() {
  return (
    <div className="App">

       <BrowserRouter>
        <Routes>
            <Route path="/" element={<Menu/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/Contact/:category/:id" element={<Contact/>}/>

            <Route path="*" element={<h2>page not found</h2>}/>

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
