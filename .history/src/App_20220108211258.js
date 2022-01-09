import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddWine from "./components/AddWine";
import WineList from "./components/WineList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/wineCellar" className="navbar-brand">
          Franke Farms
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/wineCellar"} className="nav-link">
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
        <h2>React Hooks Firestore example</h2>
        <Switch>
          <Route exact path={["/", "/wineCellar"]} component={WineList} />
          <Route exact path="/add" component={AddWine} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
