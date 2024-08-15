import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";

const App = () => {
  return (
    <Router>
     <Routes>
        <Route exact path="/" element={<Navbar/>} />
        <Route path = 'home' element ={<Home/>}/>
      
        </Routes>
    </Router>
  );
};

export default App;
