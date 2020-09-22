import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import courseStore from "../stores/courseStore";
import { deleteCourse, loadCourses } from "../actions/courseActions";
import CourseList from "./CourseList";

export const CoursesPage = () => {
  const [courses, setCourses] = useState(courseStore.getCourses());

  const onChange = () => {
    setCourses(courseStore.getCourses());
  };

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange);
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add course
      </Link>
      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </>
  );
};

export default CoursesPage;
