import { Routes, Route } from "react-router-dom";

// css
import './App.css'

// component
import Navbar from './components/Navbar';
import SideBar from "./components/SideBar";

// pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {

  return (
    <>
      <div className="bg-white dark:bg-black">

        <div className="fixed w-full z-10">
          <Navbar></Navbar>
        </div>

        {/* <div className="top-[72px] fixed z-50"> */}
          <SideBar />
        {/* </div> */}

        <Routes>
          <Route path="/" element={<><Home /></>}></Route>
          <Route path="/projects" element={<><Projects /></>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
