import React from "react";

const styles = {
  divCard: {
    height: "60vh",
  },
  divCardHeader: {
    margin: ".3rem .5rem 1rem .5rem",
  },
};

export default function AddFilm() {
  return (
    <div className="card" style={styles.divCard}>
      <div className="card-header">
        <h3 style={styles.divCardHeader}>Статистика</h3>
      </div>
      <div className="card-container">
        <div className="tabs">
          <ul>
            <li class="is-active">
              <span>Режиссеры</span>
            </li>
            <li>
              <span>Актеры</span>
            </li>
          </ul>
        </div>
        {/* <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu4"
            >
              <span>Пользователи</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu4" role="menu">
            <div className="dropdown-content">
              <div className="dropdown-item">
                <button class="button">Режиссеры</button>
                <button class="button">Актеры</button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
