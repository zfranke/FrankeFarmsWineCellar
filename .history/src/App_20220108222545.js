import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddWine from "./components/AddWine";
import WineList from "./components/WineList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/wines" className="navbar-brand">
          Franke Farms
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/wines"} className="nav-link">
              Wine
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <h2>Franke Farms: Wine Cellar</h2>
        <Routes>
          <Route path="/" element={<WineList />} />
          <Route path="add" element={<AddWine />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
