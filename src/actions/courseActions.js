import actionTypes from "./actionTypes";
import * as courseApi from "../api/courseApi";
import dispatcher from "../appDispatcher";

export const saveCourse = async (course) => {
  const savedCourse = await courseApi.saveCourse(course);
  dispatcher.dispatch({
    actionType: course.id
      ? actionTypes.UPDATE_COURSE
      : actionTypes.CREATE_COURSE,
    course: savedCourse,
  });
};

export const loadCourses = async () => {
  const courses = await courseApi.getCourses();
  dispatcher.dispatch({
    actionType: actionTypes.LOAD_COURSES,
    courses,
  });
};

export const deleteCourse = async (id) => {
  await courseApi.deleteCourse(id);
  dispatcher.dispatch({
    actionType: actionTypes.DELETE_COURSE,
    id,
  });
};
