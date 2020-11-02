import React from "react";
import AdminPanel from "./admin-panel/AdminPanel";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

const styles = {
  divCont: {
      margin: '2vh 2vw'
  }
}

function App() {
  return (
    <Router>
      <div className="navbar" role="navigation">
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">Главная</Link>

            <Link to="/admin-panel" className="navbar-item">Административная панель</Link>
          </div>
        </div>
      </div>

      <div style={styles.divCont}>
        <Route path="/admin-panel" component={AdminPanel} />
      </div>
    </Router>
  );
}

export default App;
