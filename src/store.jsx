import { createStore } from "redux";
import { counterReducer } from "./services/reducers/counterReducer";

export const store = createStore(counterReducer);
