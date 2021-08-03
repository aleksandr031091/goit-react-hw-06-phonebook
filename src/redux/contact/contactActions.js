const GET_CONTACTS = "getContacts";
const ADD_CONTACT = "addContact";
const DELETE_CONTACT = "deleteContact";
const FILTER_CONTACTS = "filterContacts";

export { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACTS };

const getContacts = (contact) => ({
  type: GET_CONTACTS,
  payload: contact,
});

const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

const filterContacts = (id) => ({
  type: FILTER_CONTACTS,
  payload: id,
});
