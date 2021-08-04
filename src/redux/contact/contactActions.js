import { createAction } from "@reduxjs/toolkit";

const addContacts = createAction("contact/addContacts");
const deleteContacts = createAction("contact/deleteContacts");
const filterContacts = createAction("contact/filterContacts");
const alertContacts = createAction("contact/errorContacts");
const resetAlert = createAction("contact/resetError");

export {
  addContacts,
  deleteContacts,
  filterContacts,
  alertContacts,
  resetAlert,
};
