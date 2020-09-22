import React from "react";
import PropTypes from "prop-types";

import TextInput from "./common/TextInput";
import SelectInput from "./common/SelectInput";

const CourseForm = ({ course, authors, onChange, onSubmit, errors }) => {
  return (
    <form onSubmit={onSubmit}>
      <TextInput
        id="title"
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        id="author"
        name="authorId"
        label="Author"
        options={authors}
        value={course.authorId}
        onChange={onChange}
        error={errors.authorId}
      />

      <TextInput
        id="category"
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

CourseForm.defaultProps = {
  errors: {},
};

export default CourseForm;
