// const GET_CONTACTS = "contact/getContacts";
const ADD_CONTACT = "contact/addContact";
const DELETE_CONTACT = "contact/deleteContact";
const FILTER_CONTACTS = "contact/filterContacts";

export { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACTS };

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

export { addContact, deleteContact, filterContacts };
