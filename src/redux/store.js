import { createStore } from "redux";
import phoneReducer from "./Phone/reducerPhone";

const store = createStore(phoneReducer);

export default store;
