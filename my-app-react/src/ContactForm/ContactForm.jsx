import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";
import { info } from "@pnotify/core";

const INITIAL_STATE = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  nameId = nanoid();
  numberId = nanoid();

  reset = () => this.setState({ ...INITIAL_STATE });

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { contacts } = this.props;
    if (!contacts.find((item) => item.name === this.state.name)) {
      const contactData = {
        name: this.state.name,
        number: this.state.number,
        id: nanoid(),
      };
      this.props.handleSubmit(contactData);
      this.reset();
    } else {
      alert(`${this.state.name} is already in contacts.`);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}>
          <h3>Name</h3>
          <input
            className={styles.form}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameId}
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor={this.numberId}>
          <h3>Number</h3>
          <input
            className={styles.form}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.numberId}
            placeholder="Number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
