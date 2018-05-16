import axios from 'axios';
import store from './../../store';

/**
 * Thunk Action Creator getGithubProfile.
 * Calls https://api.github.com/users/radomUser and fetches an Object with the user data.
 * Selects a random profile
 * Dispatches the gotGithubProfile with the retrived user object
 * on success or {SOME_ERROR} on failure.
 *
 * @emits {REQUEST_GITHUB_PROFILE}
 * @emits {GOT_GITHUB_PROFILE}
 * @returns {void}
 */
export const getGithubProfile = () => async (dispatch) => {
  dispatch(requestGithubProfile());

  const user = getRandomUser();

  try {
    const data = await makeHttpRequestForProfile(user);

    dispatch(gotGithubProfile(data));
  } catch (error) {
    dispatch(gotGithubProfile('SOME_ERROR'));
  }
};

/**
 * Thunk Action Creator getGithubCompareProfiles.
 * Calls twice the https://api.github.com/users/radomUser and fetches an array with 2 random github profiles.
 * Dispatches the gotGithubCompareProfiles with the retrived array
 * on success or {SOME_ERROR} on failure.
 *
 * @emits {REQUEST_GITHUB_COMPARE_PROFILE}
 * @emits {GOT_GITHUB_COMPARE_PROFILE}
 * @returns {void}
 */
export const getGithubCompareProfiles = () => async (dispatch) => {
  dispatch(requestGithubCompareProfiles());

  const firstUser = getRandomUser();
  const secondUser = getRandomUser();

  try {
    const profiles = await Promise.all([makeHttpRequestForProfile(firstUser),
      makeHttpRequestForProfile(secondUser)]);

    dispatch(gotGithubCompareProfiles(profiles));
  } catch (error) {
    dispatch(gotGithubProfile('SOME_ERROR'));
  }
};


/**
 * Action Creator requestGithubProfile.
 * Signals the start of retrieving github profile object.
 *
 * @return {object} Contains the action type {REQUEST_GITHUB_PROFILE}
 */
export const requestGithubProfile = () => ({ type: 'REQUEST_GITHUB_PROFILE' });

/**
 * Action Creator gotGithubProfile.
 * Signals the end of retrieving github profile object.
 *
 * @param {Object} profile - Profile Object
 * @return {object} Contains the action type {GOT_GITHUB_PROFILE} and the Github profile Object
 */
export const gotGithubProfile = profile => ({ type: 'GOT_GITHUB_PROFILE', profile });

/**
 * Action Creator requestGithubCompareProfiles.
 * Signals the start of retrieving the compare github profiles.
 *
 * @return {object} Contains the action type {REQUEST_GITHUB_COMPARE_PROFILE}
 */
export const requestGithubCompareProfiles = () => ({ type: 'REQUEST_GITHUB_COMPARE_PROFILE' });

/**
 * Action Creator gotGithubCompareProfiles.
 * Signals the end of retrieving github profile object.
 *
 * @param {Array} profile - Profiles Array
 * @return {object} Contains the action type {GOT_GITHUB_PROFILE} and the Github profiles Array
 */
export const gotGithubCompareProfiles = profiles => ({ type: 'GOT_GITHUB_COMPARE_PROFILE', profiles });


//  Utility Functions

async function makeHttpRequestForProfile(user) {
  const response = await axios.get(`https://api.github.com/users/${user.login}`);
  const { data } = response;
  return data;
}

function getRandomUser() {
  return store.getState().App.users[Math.floor(Math.random() * 29)];
}
