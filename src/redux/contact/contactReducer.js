import { combineReducers } from "redux";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACTS,
} from "../contact/contactActions";

const contactItemReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];

    case DELETE_CONTACT:
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

const contactReduser = combineReducers({
  contacts: contactItemReducer,
  filter: filterReducer,
});

export default contactReduser;
