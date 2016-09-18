/**
 * Created by Pat on 9/11/2016.
 */
import constantes from '../constantes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
  return { type : constantes.ACTIONS.LOAD_COURSES_SUCCESS, courses };
}

export function loadCoursesFailure(courses) {
  return { type : constantes.ACTIONS.LOAD_COURSES_FAILURE, courses };
}

export function saveCourseSuccess(savedCourse) {
  return { type : constantes.ACTIONS.SAVE_COURSE_SUCCESS, savedCourse };
}

export function createCourseSuccess(savedCourse) {
  return { type : constantes.ACTIONS.CREATE_COURSE_SUCCESS, savedCourse };
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(saveCourseSuccess(savedCourse)) :
        dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      throw(error);
    });
  };
}
