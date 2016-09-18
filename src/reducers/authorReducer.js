/**
 * Created by Pat on 9/14/2016.
 */
import constantes from '../constantes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case constantes.ACTIONS.LOAD_AUTHORS_SUCCESS :
      return action.authors;
    default :
      return state;
  }

}
