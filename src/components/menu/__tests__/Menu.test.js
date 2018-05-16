/* global jest */
/* eslint-disable react/no-find-dom-node */
/* eslint "require-jsdoc": 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';

import { MemoryRouter } from 'react-router-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Menu from './../Menu';

import TestUtils from 'react-dom/test-utils';


describe('Menu Component', () => {
  const openedDrawerState = false;
  const closeMenuActionState = jest.fn();
  const muiTheme = getMuiTheme();

  const shallowWithContext = node => shallow(node, { context: { muiTheme } });
  const mountWithContext = node => mount(node, { context: { muiTheme }, childContextTypes: { muiTheme: PropTypes.object } });

  injectTapEventPlugin();

  let shallowComponent;
  let mountComponent;


  describe('shallowWithContext', () => {
    beforeEach(() => {
      shallowComponent = shallowWithContext(<Menu
        openedDrawerState={openedDrawerState}
        closeMenuState={closeMenuActionState}
      />);
    });

    it('renders without crashing', () => {
      expect(shallowComponent).toBeDefined();
    });
  });

  describe('mountWithContext', () => {
    beforeEach(() => {
      mountComponent = mountWithContext(<MemoryRouter>
        <Menu
          openedDrawerState={openedDrawerState}
          closeMenuActionState={closeMenuActionState}
        />
      </MemoryRouter>);
    });

    it('renders without crashing', () => {
      expect(mountComponent).toBeDefined();
    });

    it('renders five MenuItems', () => {
      expect(mountComponent.find('MenuItem')).toHaveLength(5);
    });

    it('renders one Drawer', () => {
      expect(mountComponent.find('Drawer')).toHaveLength(1);
      expect(mountComponent.find('Drawer').props().open).toEqual(false);
    });

    it('MenuItems touchTap triggers callback', () => {
      const linkToHome = ReactDOM.findDOMNode(TestUtils.findRenderedDOMComponentWithClass(mountComponent.instance(), 'linkToHome'));

      const linkToProfile = ReactDOM.findDOMNode(TestUtils.findRenderedDOMComponentWithClass(mountComponent.instance(), 'linkToProfile'));

      const linkToLicense = ReactDOM.findDOMNode(TestUtils.findRenderedDOMComponentWithClass(mountComponent.instance(), 'linkToLicense'));

      TestUtils.Simulate.touchTap(linkToHome);
      TestUtils.Simulate.touchTap(linkToProfile);
      TestUtils.Simulate.touchTap(linkToLicense);

      expect(closeMenuActionState).toHaveBeenCalled();
      expect(closeMenuActionState.mock.calls.length).toBe(3);
    });
  });
});
