import React from "react";
import { Link } from "react-router-dom";

const CourseItem = ({ course, deleteCourse }) => (
  <tr>
    <td>
      <Link to={`/course/${course.slug}`}>{course.title}</Link>
    </td>
    <td>{course.authorId}</td>
    <td>{course.category}</td>
    <td>
      <button
        className="btn btn-outline-danger"
        onClick={deleteCourse(course.id)}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default CourseItem;
