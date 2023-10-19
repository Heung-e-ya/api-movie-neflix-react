import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import authenticateReducer from "./authenticateReducer";

export default combineReducers({ movie: movieReducer, auth: authenticateReducer });
