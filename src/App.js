import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
  return (
    <Router>
     <Routes>
        <Route exact path="/" element={<Navbar/>} />
        </Routes>
    </Router>
  );
};

export default App;
