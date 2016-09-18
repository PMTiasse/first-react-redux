/**
 * Created by Pat on 9/11/2016.
 */
import {combineReducers} from 'redux';
import courseReducer from './courseReducer';
import authorReducer from './authorReducer';
import ajaxStatusReducer from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courseReducer, // = courseReducer : courseReducer. Shorthand property name.
  authorReducer,
  ajaxStatusReducer
});

export default rootReducer;
