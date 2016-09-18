/**
 * Created by Pat on 9/16/2016.
 */
import constantes from '../constantes';
import initialState from './initialState';

export default function ajaxStatusReducer(state = initialState.numAjaxCallsInProgress, action) {
  if (action.type === constantes.ACTIONS.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (action.type.substring(action.type.length - 8) === '_SUCCESS') {
    //  This condition avoid to have to send another action when an ajax call is launched
    //    But on the other end, this pattern doesn't seem stable using a suffix like this.
    return state - 1;
  } else {
    return state;
  }
}
