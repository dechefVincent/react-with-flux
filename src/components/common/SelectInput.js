import React from "react";
import PropTypes from "prop-types";

const SelectInput = ({ id, name, label, options, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <div className="field">
        <select
          id={id}
          name={name}
          value={value}
          className="form-control"
          onChange={onChange}
        >
          <option value="" />
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

SelectInput.defaultProps = {
  error: "",
};

export default SelectInput;
