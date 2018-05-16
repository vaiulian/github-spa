export const initialState = {
  isProfileLoaded: false,
  isProfileCompareLoaded: false,
  githubProfile: {},
  githubCompareProfiles: [],
};

let maxFollowers = 0;
let maxIndex;
let updatedPofiles;

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

      maxFollowers = 0;
      maxIndex = 0;

      // check for the most followers
      updatedPofiles = action.profiles.map((profile, index) => {
        if (profile.followers > maxFollowers) {
          maxFollowers = profile.followers;
          maxIndex = index;
        }
        return profile;
      });

      updatedPofiles[maxIndex].winner = true;

      newState = Object.assign({}, state, {
        isProfileCompareLoaded: true,
        githubCompareProfiles: updatedPofiles,
      });
      break;

    default:
      newState = state;
  }

  return newState;
};

export default reducer;
