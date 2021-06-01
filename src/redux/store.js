import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import userReducer, { restoreSesionAction } from "./userDuck";
import thunk from "redux-thunk";
import charsReducer, { getCharactersAction } from "./charsDuck";
let rootReducer = combineReducers({
  user: userReducer,
  characters: charsReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  let store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  //consiguiendo los personajes
  getCharactersAction()(store.dispatch, store.getState);
  restoreSesionAction()(store.dispatch);
  return store;
}
