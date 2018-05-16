export const initialState = {
  openedDrawer: false,
  users: {},
};

/**
 * App Redux reducer.
 * Takes the current state of the Application and based on an Action
 * returns the new state of the application.
 * Doesn't mutates state, it creates a new object newState using
 * Object.assign({}, state, newState)
 *
 * @param {Object} [state=initialState] - Current state of the Application
 * @param {Object} action - An action
 * @returns {Object} newState of the Application.
 */
const reducer = (state = initialState, action) => {
  let newState = null;

  switch (action.type) {
    case 'OPEN_MENU':
      newState = Object.assign({}, state, {
        openedDrawer: !state.openedDrawer,
      });
      break;
    case 'CLOSE_MENU': // same thing, just for fun :j
      newState = Object.assign({}, state, {
        openedDrawer: false,
      });
      break;
    case 'GOT_GITHUB_PROFILES':
      newState = Object.assign({}, state, {
        users: action.users,
      });
      break;
    default:
      newState = state;
  }

  return newState;
};

export default reducer;
