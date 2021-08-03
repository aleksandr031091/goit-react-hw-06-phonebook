import { combineReducers } from "redux";
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACTS,
} from "../contact/contactActions";

const contactItemReducer = (state = { items: [] }, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS:
      return [];

    case ADD_CONTACT:
      return [];

    case DELETE_CONTACT:
      return [];

    default:
      return state;
  }
};

const filterReducer = (state = [], { type, payload }) => {
  switch (type) {
    case FILTER_CONTACTS:
      return [];

    default:
      return state;
  }
};

const contactReduser = combineReducers({
  contacts: contactItemReducer,
  filter: filterReducer,
});

export default contactReduser;
