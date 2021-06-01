import React from "react";
import styles from "./card.module.css";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";

let rick = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";

function onClick(side) {
  return () => console.log(side);
}

export default function Cards({ name, image, rightClick, leftClick, hide }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          alt="rick"
          src="https://searchvectorlogo.com/wp-content/uploads/2021/03/newmont-corporation-logo-vector.png"
        />
        <p className={styles.name}>NEWMONT</p>
        {!hide && (
          <div className={styles.actions}>
            <div onClick={leftClick || onClick("left")} className={styles.left}>
              <FontAwesome name="thumbs-down" size="2x" />
            </div>
            <div
              onClick={rightClick || onClick("right")}
              className={styles.right}
            >
              <FontAwesome name="heart" size="2x" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Cards.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  leftClick: PropTypes.func,
  rightClick: PropTypes.func,
};

Cards.defaultProps = {
  name: "Rick Sanches",
  image: rick,
};
