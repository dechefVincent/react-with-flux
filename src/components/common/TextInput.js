import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ id, name, label, value, onChange, error }) => {
  let wrapperClass = "form-group";
  if (error.length > 0) wrapperClass += " has-error";
  return (
    <div className={wrapperClass}>
      <label htmlFor={id}>{label}</label>
      <div className="field">
        <input
          id={id}
          type="text"
          name={name}
          className="form-control"
          value={value}
          onChange={onChange}
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  error: "",
};

export default TextInput;
