import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./components/Header";
import Error404 from "./error404";
import Sidebar from "./components/Sidebar";

import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="app-container">
        <Header /> 
        
        <div className="main-container">
          <Sidebar /> 
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
