import React from "react";
import styles from "./favs.module.css";
import Card from "../card/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";

function FavPage({ characters = [0] }) {
  function renderCharacter(char, i) {
    return <Card hide {...char} key={i} />;
  }
  return (
    <div className={styles.container}>
      <h2>Herramienta de evaluacion individual de fatiga</h2>
      <h3>¿Cuantas horas durmio en las ultimas 24 horas?</h3>

      <div
        class="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button type="button" class="btn btn-success">
          7 o más
        </button>
        <button type="button" class="btn btn-warning">
          5 a 6
        </button>
        <button type="button" class="btn btn-danger">
          Menos de 5
        </button>
      </div>
      {/* <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary">
          7 o más
        </button>
        <button type="button" class="btn btn-outline-primary">
          5 a 6
        </button>
        <button type="button" class="btn btn-outline-primary">
          Menos de 5
        </button>
      </div> */}
      <h3>¿Cuantas horas durmio durante las ultimas 48 horas?</h3>
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary">
          14 o más
        </button>
        <button type="button" class="btn btn-outline-primary">
          12 a 14
        </button>
        <button type="button" class="btn btn-outline-primary">
          Menos de 12
        </button>
      </div>
      <h3>¿Cuantas horas habrá permanecido despierto al finalizar el turno?</h3>
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary">
          Menos de 14
        </button>
        <button type="button" class="btn btn-outline-primary">
          14 a 16
        </button>
        <button type="button" class="btn btn-outline-primary">
          Más de 16
        </button>
      </div>
      {/* {characters.map(renderCharacter)}
      {!characters.length && <h3>No hay personajes agregados</h3>} */}
    </div>
  );
}

function mapState({ characters }) {
  return {
    characters: characters.favorites,
  };
}

export default connect(mapState)(FavPage);
