import React from "react";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/contact/contactActions";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>{name}</span> : <span>{number}</span>
          <button onClick={() => deleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const mstp = (state) => {
  return {
    contacts: state.contacts.filter(({ name, number }) =>
      Object.values({ name, number }).some((contact) =>
        contact.toUpperCase().includes(state.filter.toUpperCase())
      )
    ),
  };
};

export default connect(mstp, { deleteContact })(ContactList);
