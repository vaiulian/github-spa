/* global jest */
/* eslint-disable react/no-find-dom-node */
/* eslint "require-jsdoc": 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { spy } from 'sinon';
import { MemoryRouter } from 'react-router-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import ConnectedLicense, { License } from './../License';


describe('License Component', () => {
  const getCurrentLicenseAction = jest.fn();
  const currentLicenseState = {};
  const initialState = { License: { currentLicenseState, isFullyLoadedState: true } };

  const muiTheme = getMuiTheme();
  const mockStore = configureStore();
  let store;

  const shallowWithContext = node => shallow(node, { context: { muiTheme } });
  const mountWithContext = node => mount(node, { context: { muiTheme }, childContextTypes: { muiTheme: PropTypes.object } });

  injectTapEventPlugin();

  let shallowComponent;
  let mountComponent;


  describe('Container part', () => {
    beforeEach(() => {
      store = mockStore(initialState);
      shallowComponent = shallowWithContext(<ConnectedLicense
        store={store}
        getCurrentLicenseAction={getCurrentLicenseAction}
        currentLicenseState={currentLicenseState}
      />);
    });

    it('Container renders without crashing', () => {
      expect(shallowComponent).toBeDefined();
    });
  });

  describe('Component part', () => {
    it('renders without crashing', () => {
      mountComponent = mountWithContext(<MemoryRouter>
        <License
          getCurrentLicenseAction={getCurrentLicenseAction}
          currentLicenseState={currentLicenseState}
        />
      </MemoryRouter>);

      expect(mountComponent).toBeDefined();
    });

    it('calls componentDidMount() lifecycle method', () => {
      store = mockStore(initialState);
      const componentDidMountSpy = spy(License.prototype, 'componentDidMount');

      const getCurrentLicenseActionSpy = spy(getCurrentLicenseAction);

      mountComponent = mountWithContext(<MemoryRouter>
        <License
          store={store}
          getCurrentLicenseAction={getCurrentLicenseAction}
          currentLicenseState={currentLicenseState}
        />
      </MemoryRouter>);

      expect(License.prototype.componentDidMount.calledOnce).toEqual(true);
      expect(getCurrentLicenseActionSpy).toHaveBeenCalled();

      componentDidMountSpy.restore();
    });
  });
});
