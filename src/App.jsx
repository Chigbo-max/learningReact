import "./App.css"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import Home from "./pages/HomePage";
import About from "./pages/AboutUs";
import Menu from "./pages/Menu";
import Contact from "./pages/ContactUs"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (
    <div className="App">

      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact/>} /> 
        </Routes>
        <Footer/>
      </Router>
    </div>

  )
}

export default App

// <HomePage/>

