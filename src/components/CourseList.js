import React from "react";
import PropTypes from "prop-types";
import CourseItem from "./CourseItem";

const CourseList = ({ courses, deleteCourse }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <CourseItem
            key={course.id}
            course={course}
            deleteCourse={deleteCourse}
          />
        ))}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  deleteCourse: PropTypes.func.isRequired,
};

export default CourseList;
