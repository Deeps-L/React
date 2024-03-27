import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import TaskOne from "./pages/task1";
import TaskTwo from "./pages/task2/counter";
import TaskThree from "./pages/task3/filterable";
import "./index.css";
function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <NavLink
                className="navbar-link"
                activeClassName="active"
                to="/task1"
              >
                Task 1
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                className="navbar-link"
                activeClassName="active"
                to="/task2"
              >
                Task 2
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                className="navbar-link"
                activeClassName="active"
                to="/task3"
              >
                Task 3
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<TaskOne />} />
          <Route path="/task1" element={<TaskOne />} />
          <Route path="/task2" element={<TaskTwo />} />
          <Route path="/task3" element={<TaskThree />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
