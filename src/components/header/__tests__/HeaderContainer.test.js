import React from 'react';
import ConnectedHeader, { mapDispatchToProps } from './../HeaderContainer';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { openMenuAction } from './../../../AppActions.js';

describe('HeaderContainer Component', () => {
  const initialState = { App: { currentUser: {} } };
  const mockStore = configureStore();
  let store;
  let HeaderContainer;

  beforeEach(() => {
    store = mockStore(initialState);
    HeaderContainer = shallow(<ConnectedHeader store={store} />);
  });

  it('renders with initial state', () => {
    expect(HeaderContainer).toBeDefined();
  });

  it('checks action on dispatching', () => {
    let action;
    store.dispatch(openMenuAction());
    action = store.getActions();
    expect(action[0].type).toBe('OPEN_MENU');
  });

  describe('Maps Dispatch To Props', () => {
    it('should call openMenuAction', () => {
      // define spy
      const dispatchSpy = sinon.spy();

      const resultOfDispatch = mapDispatchToProps(dispatchSpy);
      expect(resultOfDispatch.openMenuActionState).toBeDefined();

      // call function with spy
      resultOfDispatch.openMenuActionState();

      const spyLastCall = dispatchSpy.args[0][0];

      expect(spyLastCall).toEqual(openMenuAction());
    });
  });
});
