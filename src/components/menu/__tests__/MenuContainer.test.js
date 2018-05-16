import React from 'react';
import ConnectedMenu, { mapDispatchToProps } from './../MenuContainer';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { closeMenuAction } from './../../../AppActions.js';

describe('MenuContainer Component', () => {
  const initialState = { App: { openedDrawer: false } };
  const mockStore = configureStore();
  let store;
  let MenuContainer;

  beforeEach(() => {
    store = mockStore(initialState);
    MenuContainer = shallow(<ConnectedMenu store={store} />);
  });

  it('renders with initial state', () => {
    expect(MenuContainer.prop('openedDrawerState')).toEqual(initialState.App.openedDrawer);
  });

  it('checks action on dispatching', () => {
    let action;
    store.dispatch(closeMenuAction());
    action = store.getActions();
    expect(action[0].type).toBe('CLOSE_MENU');
  });

  describe('Maps Dispatch To Props', () => {
    it('should call closeMenuAction', () => {
      // define spy
      const dispatchSpy = sinon.spy();

      const resultOfDispatch = mapDispatchToProps(dispatchSpy);
      expect(resultOfDispatch.closeMenuActionState).toBeDefined();

      // call function with spy
      resultOfDispatch.closeMenuActionState();

      const spyLastCall = dispatchSpy.args[0][0];

      expect(spyLastCall).toEqual(closeMenuAction());
    });
  });
});
