/**
 * Created by Pat on 9/11/2016.
 */
import constantes from '../constantes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case constantes.ACTIONS.LOAD_COURSES_SUCCESS :
      return [...action.courses];
    case constantes.ACTIONS.CREATE_COURSE_SUCCESS :
      return [...state, Object.assign({}, action.savedCourse)];
    case constantes.ACTIONS.SAVE_COURSE_SUCCESS :
      return [...state.filter(course => course.id !== action.savedCourse.id), Object.assign({}, action.savedCourse)];
    default :
      return state;
  }
}
