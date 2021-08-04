import { configureStore } from "@reduxjs/toolkit";
import contactReduser from "./contact/contactReducer";

const store = configureStore(contactReduser);

export default store;
