import React from "react";

const styles = {
  divCard: {
    height: "40vh",
  },
  divCardHeader: {
    margin: ".3rem .5rem 1rem .5rem",
  },
  divCardCont: {
    width: "100%",
    height: "60%",
  },
  divCardMedia: {
    width: "100%",
    height: "100%",
  },
  InputF: {
    width: "100%",
    height: "100%",
  },
  inputFSpan: {
    margin: "20% auto",
  },
};

export default function AddFilm() {
  return (
    <div className="card" style={styles.divCard}>
      <div className="card-header">
        <h3 style={styles.divCardHeader}>Добавление фильма</h3>
      </div>
      <div className="card-container" style={styles.divCardCont}>
        <div style={styles.divCardMedia}>
          <div className="file is-boxed" style={styles.InputF}>
            <label className="file-label" style={styles.InputF}>
              <input className="file-input" type="file" name="resume" />
              <span className="file-cta" style={styles.InputF}>
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label" style={styles.inputFSpan}>
                  Выберите файл...
                </span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
