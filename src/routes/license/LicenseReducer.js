export const initialState = {
  isFullyLoaded: false,
  currentLicense: {},
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
    case 'GOT_CURRENT_LICENSE':
      newState = Object.assign({}, state, {
        currentLicense: action.license,
        isFullyLoaded: true,
      });
      break;
    default:
      newState = state;
  }
  return newState;
};

export default reducer;
