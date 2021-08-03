import { createStore } from "redux";
import contactReduser from "./contact/contactReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(contactReduser, composeWithDevTools());

export default store;
