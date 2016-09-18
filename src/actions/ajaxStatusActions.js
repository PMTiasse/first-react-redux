/**
 * Created by Pat on 9/16/2016.
 */
import constantes from '../constantes';

export function beginAjaxCall() {
  return { type: constantes.ACTIONS.BEGIN_AJAX_CALL };
}
