import { nanoid } from "nanoid";
import style from "./filter.css";
import PropTypes from "prop-types";
const filterId = nanoid();
export default function Filter({ onChange, value }) {
  return (
    <div>
      <h3>Find contact by name</h3>
      <label htmlFor={filterId}>
        <input
          value={value}
          onChange={onChange}
          className="search"
          type="text"
          name="filter"
          id={filterId}
        />
      </label>
    </div>
  );
}
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
