import { createReducer, combineReducers } from "@reduxjs/toolkit";

import {
  addContacts,
  alertContacts,
  deleteContacts,
  filterContacts,
  resetAlert,
} from "../contact/contactActions";

const contactItemReducer = createReducer([], {
  [addContacts]: (state, { payload }) => [...state, payload],
  [deleteContacts]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filterReducer = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
});

const contactErrorReducer = createReducer("", {
  [alertContacts]: (_, { payload }) => payload,
  [resetAlert]: () => "",
});

const contactReduser = combineReducers({
  contacts: contactItemReducer,
  filter: filterReducer,
  error: contactErrorReducer,
});

export default contactReduser;
