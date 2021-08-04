import { combineReducers } from "redux";
import {
  ADD_CONTACTS,
  DELETE_CONTACTS,
  FILTER_CONTACTS,
  ALERT_CONTACTS,
  RESET_ALERT,
} from "../contact/contactActions";

const contactItemReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CONTACTS:
      return [...state, payload];

    case DELETE_CONTACTS:
      return state.filter((contact) => contact.id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case FILTER_CONTACTS:
      return payload;

    default:
      return state;
  }
};

const contactErrorReducer = (state = "", { type, payload }) => {
  switch (type) {
    case ALERT_CONTACTS:
      return payload;

    case RESET_ALERT:
      return "";

    default:
      return state;
  }
};

const contactReduser = combineReducers({
  contacts: contactItemReducer,
  filter: filterReducer,
  error: contactErrorReducer,
});

export default contactReduser;
