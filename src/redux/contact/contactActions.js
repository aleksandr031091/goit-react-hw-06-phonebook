// const GET_CONTACTS = "contact/getContacts";
const ADD_CONTACTS = "contact/addContacts";
const DELETE_CONTACTS = "contact/deleteContacts";
const FILTER_CONTACTS = "contact/filterContacts";
const ALERT_CONTACTS = "contact/errorContacts";
const RESET_ALERT = "contact/resetError";

export {
  ADD_CONTACTS,
  DELETE_CONTACTS,
  FILTER_CONTACTS,
  ALERT_CONTACTS,
  RESET_ALERT,
};

const addContacts = (contact) => ({
  type: ADD_CONTACTS,
  payload: contact,
});

const deleteContacts = (id) => ({
  type: DELETE_CONTACTS,
  payload: id,
});

const filterContacts = (id) => ({
  type: FILTER_CONTACTS,
  payload: id,
});

const alertContacts = (message) => ({
  type: ALERT_CONTACTS,
  payload: message,
});

const resetAlert = () => ({
  type: RESET_ALERT,
});

export {
  addContacts,
  deleteContacts,
  filterContacts,
  alertContacts,
  resetAlert,
};
