import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import AppReducer from './AppReducer';
import ProfileReducer from './routes/profile/ProfileReducer';

const mainReducer = combineReducers({
  App: AppReducer,
  Profile: ProfileReducer,
});

const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
