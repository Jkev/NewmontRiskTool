import React from "react";
import Card from "../card/Card";
import styles from "./home.module.css";
import { connect } from "react-redux";
import {
  removeCharacterAction,
  addToFavoritesAction,
} from "../../redux/charsDuck";

function Home({ addToFavoritesAction, chars, removeCharacterAction }) {
  function renderCharacter() {
    let char = chars[0];
    return <Card rightClick={addFav} leftClick={nextCharacter} {...char} />;
  }
  function nextCharacter() {
    removeCharacterAction();
  }
  function addFav() {
    addToFavoritesAction();
  }
  return (
    <div className={styles.container}>
      <h2>Herramienta de evaluacion de fatiga</h2>
      <div className={styles.containe}>
        <div className={styles.card}>
          <img
            alt="rick"
            src="https://searchvectorlogo.com/wp-content/uploads/2021/03/newmont-corporation-logo-vector.png"
          />
        </div>
      </div>
    </div>
  );
}

function mapState(state) {
  return {
    chars: state.characters.array,
  };
}

export default connect(mapState, {
  removeCharacterAction,
  addToFavoritesAction,
})(Home);
