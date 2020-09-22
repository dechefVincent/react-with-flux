import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
// import { Prompt } from "react-router-dom";

import { getAuthors } from "../api/authorApi";
import courseStore from "../stores/courseStore";
import CourseForm from "./CourseForm";
import * as courseActions from "../actions/courseActions";

const ManageCoursePage = (props) => {
  const [authors, setAuthors] = useState([]);
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: undefined,
    slug: "",
    title: "",
    authorId: undefined,
    category: "",
  });
  const [errors, setErrors] = useState({});

  const onChange = () => {
    setCourses(courseStore.getCourses());
  };
  const fetchCourse = async (slug) => {
    setCourse(courseStore.getCourseBySlug(slug));
  };
  useEffect(() => {
    courseStore.addChangeListener(onChange);
    const slug = props.match.params.slug;
    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
      fetchCourse(slug);
    }
    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);
  const fetchAuthors = async () => {
    setAuthors(await getAuthors());
  };
  useEffect(() => {
    fetchAuthors();
  }, []);
  const handleChange = ({ target }) => {
    setCourse({ ...course, [target.name]: target.value });
  };
  const formIsValid = () => {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required!";
    if (!course.authorId) _errors.authorId = "Author ID is required!";
    if (!course.category) _errors.category = "Category is required!";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formIsValid()) return;
    await courseActions.saveCourse(course);
    props.history.push("/courses");
    toast.success("Course saved");
  };

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        authors={authors}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
      />
      {/* <Prompt when={true} message="Are you sure you want to leave?" /> */}
    </>
  );
};

export default ManageCoursePage;
