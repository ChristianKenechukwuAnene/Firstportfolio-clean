/***App.tsx = Global Layout + Routing
App.tsx is the "root" of your React application.
It should only contain things that appear on every page (like your navbar, footer, or routing logic).
The navbar (logo + navigation links).The <Routes> configuration for Home, About, Projects, etc.
This keeps your App.tsx clean and easy to manage. */


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import React from "react";
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Myblog from './Pages/Myblog';
import Contact from './Pages/Contact';
import LastaPage from "./Components/LastaPage"; // Components detailed page...
import PumaPage from "./Components/PumaPage";
import SmartPage from "./Components/SmartPage";
import PhotoPage from "./Components/PhotoPage";
import Blog1Page from "./Components/Blog1Page";
import Blog2Page from "./Components/Blog2Page";
import Blog3Page from "./Components/Blog3Page";
import my_profile from './assets/my_profile.png';
import './App.css';


{/*Radux connection */}
// import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./store";

<Provider store={store}>
  <App />
</Provider>


 

function App() {
  return (
    <Router>
      {/* Navbar */}
      <div className="main-header">
        <nav className="navbar">
          <div className="logo">
            <img src={my_profile} alt="my_Profile" />
          </div>
          <ul className="nav-links">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/projects">PROJECTS</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
            <li><Link to="/myblog">MYBLOG</Link></li>
          </ul>
        </nav>
      </div>


      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myblog" element={<Myblog />} />
        <Route path="/lasta" element={<LastaPage />} />
        <Route path="/puma" element={<PumaPage />} />
        <Route path="/smart" element={<SmartPage />} />
        <Route path="/photo" element={<PhotoPage />} />
        <Route path="/blog1" element={<Blog1Page />} />
       <Route path="/blog2" element={<Blog2Page />} />
       <Route path="/blog3" element={<Blog3Page />} />
      </Routes>
    </Router>

    
  );
}

export default App;


  