import axios from 'axios';

/**
 * Thunk Action Creator getCurrentLicenseAction.
 * Calls api/license/getcurrentlicense for the current loggind in users
 * license and fetches an object.
 * Dispatch the gotCurrentLicenseAction with the retrived license object
 * on success or {SOME_ERROR} on failure.
 *
 * @emits {REQUEST_CURRENT_LICENSE}
 * @emits {GOT_CURRENT_LICENSE}
 * @returns {void}
 */
/**
 * Retrived the current user License
 * @return {object} Contains the action type
 */
export const getCurrentLicenseAction = () => async (dispatch) => {
  dispatch(requestCurrentLicenseAction());

  try {
    const response = await axios.get('/api/license/getcurrentlicense');
    const { data } = response;
    dispatch(gotCurrentLicenseAction(data));
  } catch (error) {
    dispatch(gotCurrentLicenseAction('SOME_ERROR'));
  }
};

/**
 * Action Creator requestCurrentLicenseAction.
 * Signals the start of retrieving the current logged in users license object.
 * Calls GAEvent.sendEvent with current action type {REQUEST_CURRENT_LICENSE}
 *
 * @return {object} Contains the action type {REQUEST_CURRENT_LICENSE}
 */
export const requestCurrentLicenseAction = () => ({ type: 'REQUEST_CURRENT_LICENSE' });

/**
 * Action Creator gotCurrentLicenseAction.
 * Signals the end of retrieving the current logged in users license object.
 * Calls GAEvent.sendEvent with current action type {GOT_CURRENT_LICENSE}
 *
 * @param {Object} license - License Object
 * @return {object} Contains the action type {GOT_CURRENT_LICENSE} and the License Object
 */
export const gotCurrentLicenseAction = license => ({ type: 'GOT_CURRENT_LICENSE', license });
