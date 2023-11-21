import { Routes, Route } from "react-router-dom";

// css
import './App.css'

// component
// import Navbar from './components/Navbar';

// pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {

  return (
    <>
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path="/" element={<><Home /></>}></Route>
        <Route path="/projects" element={<><Projects /></>}></Route>
      </Routes>
    </>
  )
}

export default App
