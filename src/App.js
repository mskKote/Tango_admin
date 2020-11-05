import React from "react";

import Statistics from "./pages/Statistics";
import AddFilm    from "./pages/AddFilm";
import AllFIlms   from "./pages/AllFilms";
import Users      from "./pages/Users";

import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Navbar from './components/Navbar';

const styles = {
  divCont: {
      margin: '2vh 2vw'
  }
}

export function App() {
    return (
    <Router>
      <Navbar />

      <div style={styles.divCont}>
        <Switch>
          <Route path="/statistics" component={Statistics} />
          <Route path="/add-film"   component={AddFilm} />
          <Route path="/films"      component={AllFIlms} />
          <Route path="/users"      component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;