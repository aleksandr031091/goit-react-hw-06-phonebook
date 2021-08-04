import React from "react";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/contact/contactActions";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <span>{name}</span> : <span>{number}</span>
          <button className={css.button} onClick={() => deleteContact(id)}>
            Delete
          </button>
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
