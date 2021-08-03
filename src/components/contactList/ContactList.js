import React from "react";
import { connect } from "react-redux";
import deleteContact from "../../redux/contact/contactActions";

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul>
      <h2>good</h2>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
        </li>
      ))}
    </ul>
  );
};

const mstp = (state) => {
  return { contacts: state.contacts };
};
export default connect(mstp)(ContactList);
