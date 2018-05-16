import axios from 'axios';
import { getGithubProfile, getGithubCompareProfiles } from './routes/profile/ProfileActions';

/**
 * Thunk Action Creator getGithubProfiles.
 * Calls https://api.github.com/users and fetches an array with the first 46 users.
 * Dispatches the gotGithubProfiles with the retrived users object
 * on success or {SOME_ERROR} on failure.
 * Dispatches the getGithubProfile and getGithubCompareProfiles in order to populate the profile
 * reducer as well.
 *
 * @emits {REQUEST_GITHUB_PROFILES}
 * @emits {REQUEST_GITHUB_PROFILE}
 * @emits {REQUEST_GITHUB_COMPARE_PROFILES}
 * @emits {GOT_GITHUB_PROFILES}
 * @returns {void}
 */
export const getGithubProfiles = () => async (dispatch) => {
  dispatch(requestGithubProfiles());

  try {
    const response = await axios.get('https://api.github.com/users');
    const { data } = response;

    dispatch(gotGithubProfiles(data));
    dispatch(getGithubProfile());
    dispatch(getGithubCompareProfiles());
  } catch (error) {
    dispatch(gotGithubProfiles('SOME_ERROR'));
  }
};


/**
 * Action Creator requestGithubProfiles.
 * Signals the start of retrieving github users object.
 *
 * @return {object} Contains the action type {REQUEST_GITHUB_PROFILES}
 */
export const requestGithubProfiles = () => ({ type: 'REQUEST_GITHUB_PROFILES' });

/**
 * Action Creator gotGithubProfiles.
 * Signals the end of retrieving github users object.
 *
 * @param {Object} user - User Object
 * @return {object} Contains the action type {GOT_GITHUB_PROFILES} and the Github user Object
 */
export const gotGithubProfiles = users => ({ type: 'GOT_GITHUB_PROFILES', users });

/**
 * Action Creator openMenuAction.
 *
 * @return {object} Contains the action type {OPEN_MENU}
 */
export const openMenuAction = () => ({ type: 'OPEN_MENU' });

/**
 * Action Creator closeMenuAction.
 *
 * @return {object} Contains the action type {CLOSE_MENU}
 */
export const closeMenuAction = () => ({ type: 'CLOSE_MENU' });
