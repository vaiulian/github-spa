export const initialState = {
  isProfileLoaded: false,
  isProfileCompareLoaded: false,
  githubProfile: {},
  githubCompareProfiles: {},
};

/**
 * License Redux reducer.
 * Takes the current state of the Application (regarding the License)
 * and based on an Action returns the new state of the application.
 * Doesn't mutates state, it creates a new object newState using
 * Object.assign({}, state, newState)
 *
 * @param {Object} [state=initialState] - Current state of the License
 * @param {Object} action - An action
 * @returns {Object} newState of the License.
 */
const reducer = (state = initialState, action) => {
  let newState = null;

  switch (action.type) {
    case 'REQUEST_GITHUB_PROFILE':
      newState = Object.assign({}, state, {
        isProfileLoaded: false,
      });
      break;

    case 'GOT_GITHUB_PROFILE':
      newState = Object.assign({}, state, {
        githubProfile: action.profile,
        isProfileLoaded: true,
      });
      break;

    case 'REQUEST_GITHUB_COMPARE_PROFILE':
      newState = Object.assign({}, state, {
        isProfileCompareLoaded: false,
      });
      break;

    case 'GOT_GITHUB_COMPARE_PROFILE':
      newState = Object.assign({}, state, {
        isProfileCompareLoaded: true,
        githubCompareProfiles: action.profiles,
      });
      break;

    default:
      newState = state;
  }

  return newState;
};

export default reducer;
