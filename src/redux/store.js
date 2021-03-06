import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import counterReducer from "./counter/counter.reducer.js";

const rootReducer = combineReducers({
    counter:counterReducer,
});



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));




export default store;


