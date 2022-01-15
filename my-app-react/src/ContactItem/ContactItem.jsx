import React from "react";
import styles from "./contactItem.css";
import PropTypes from "prop-types";

export default function ContactItem({ name, number, deleteContact }) {
  return (
    <li className="li_wrapper">
      <p className="li__text">
        <span>{name} :</span> {number}
      </p>
      <button className="li__btn" onClick={deleteContact} type="button">
        Delete
      </button>
    </li>
  );
}
ContactItem.prototypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
