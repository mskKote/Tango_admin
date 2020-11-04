import React from "react";

import Statistics from "./admin-panel/Statistics";
import AddFilm from "./admin-panel/AddFilm";
import AllFIlms from "./admin-panel/AllFilms";

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
            <Link to="/statistics" className="navbar-item">Статистика</Link>
            <Link to="/add-film" className="navbar-item">Добавить фильм</Link>
            <Link to="/films" className="navbar-item">Редактирование</Link>
          </div>
        </div>
      </div>

      <div style={styles.divCont}>
        <Route path="/statistics" component={Statistics} />
      </div>
      <div style={styles.divCont}>
        <Route path="/add-film" component={AddFilm} />
      </div>
      <div style={styles.divCont}>
        <Route path="/films" component={AllFIlms} />
      </div>
    </Router>
  );
}

export default App;
