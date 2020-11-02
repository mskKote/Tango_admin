import React from "react";

import AddFilm from "./add-film/AddFilm";
import Statistics from "./statistics/Statistics";


export default function AdminPanel() {
  return (
    <div className="columns is-variable is-6">
      <div className="column is-3">
        <AddFilm />
      </div>
      <div className="column is-9">
        <Statistics />
      </div>
      {/* <Statistics></Statistics> */}
    </div>
  );
}
