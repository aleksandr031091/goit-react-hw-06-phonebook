import React, { Component } from "react";
import { connect } from "react-redux";
import { addContact } from "../../redux/contact/contactActions";
import { v4 as uuidv4 } from "uuid";
import css from "./ContactForm.module.css";

const initialState = { name: "", number: "" };

class ContactForm extends Component {
  state = { ...initialState };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addContact({
      name: this.state.name,
      number: this.state.number,
      id: uuidv4(),
    });
    this.setState({ ...initialState });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form className={css.form} onSubmit={this.onHandleSubmit}>
          <label className={css.label}>
            Name
            <input
              className={css.input}
              type="text"
              name="name"
              value={name}
              //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.onHandleChange}
            />
          </label>
          <label className={css.label}>
            Phone
            <input
              className={css.input}
              type="tel"
              name="number"
              value={number}
              //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={this.onHandleChange}
            />
          </label>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default connect(null, { addContact })(ContactForm);
