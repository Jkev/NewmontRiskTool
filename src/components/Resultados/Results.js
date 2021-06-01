import React from "react";
import styles from "./login.module.css";
import { connect } from "react-redux";
import { doGoogleLoginAction, logOutAction } from "../../redux/userDuck";
import "bootstrap/dist/css/bootstrap.min.css";

function Results({ logOutAction, loggedIn, fetching, doGoogleLoginAction }) {
  function doLogin() {
    doGoogleLoginAction();
  }
  function logOut() {
    logOutAction();
  }
  if (fetching) return <h2>cargando...</h2>;
  return (
    <div className={styles.container}>
      <h1>Bienvenido Supervisor</h1>
      <p>
        <a
          class="btn btn-success"
          data-bs-toggle="collapse"
          href="#multiCollapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Riesgo Bajo
        </a>
        <button
          class="btn btn-warning"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#multiCollapseExample2"
          aria-expanded="false"
          aria-controls="multiCollapseExample2"
        >
          Riesgo Medio
        </button>
        <button
          class="btn btn-danger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".multi-collapse"
          aria-expanded="false"
          aria-controls="multiCollapseExample1 multiCollapseExample2"
        >
          Riesgo ALTO
        </button>
      </p>
      <div class="row">
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample1">
            <div class="card card-body">
              Some placeholder content for the first collapse component of this
              multi-collapse example. This panel is hidden by default but
              revealed when the user activates the relevant trigger.
            </div>
          </div>
        </div>
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample2">
            <div class="card card-body">
              Some placeholder content for the second collapse component of this
              multi-collapse example. This panel is hidden by default but
              revealed when the user activates the relevant trigger.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function mapState({ user: { fetching, loggedIn } }) {
  return { fetching, loggedIn };
}
export default connect(mapState, { doGoogleLoginAction, logOutAction })(
  Results
);
