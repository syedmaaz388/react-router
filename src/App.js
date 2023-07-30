import './App.css';
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
function App() {
  return (
    <>
    <Main>
     <Navbar/>
     <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route  path="/*" element={<Error/>} />
     </Routes>
    </Main>
    </>
  );
}
export default App;
