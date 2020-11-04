import React from "react";
// import { Link } from "react-router-dom";

const styles = {
  divCard: {
    height: "60vh",
  },
  chsButtons: {
    borderRadius: '0px' 
  },
};

export default function AddFilm() {
  return (
    <div className="card" style={styles.divCard}>
      <div className="card-header">
        <p className="card-header-title">Статистика</p>
      </div>
      <div className="card-container">
        <div className="navbar" role="navigation">
          <div className="navbar-menu">
            <div className="navbar-start">
              <div className="columns is-variable is-0">
                <div className="column">
                  <button className="button is-light" style={styles.chsButtons}>Пользователи</button>
                </div>
                <div className="column">
                  <button className="button is-light" style={styles.chsButtons}>Фильмы</button>
                </div>
                <div className="column">
                  <button className="button is-light" style={styles.chsButtons}>Популярные</button>
                </div>
              </div>
              {/* <button class="button is-light">Пользователи</button>
              <button class="button is-light">Фильмы</button>
              <button class="button is-light">Популярные</button> */}
              {/* <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                  <button
                    className="button is-light"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu4"
                  >
                    <span>Пользователи</span>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                  <div className="dropdown-content">
                    <div className="dropdown-item">
                      <p>Режиссеры</p>
                    </div>
                    <div className="dropdown-item">
                      <p>Актеры</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
