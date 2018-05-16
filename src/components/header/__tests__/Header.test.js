/* global jest */
/* eslint-disable react/no-find-dom-node */
/* eslint "require-jsdoc": 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';

import { MemoryRouter } from 'react-router-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './../Header';


describe('Header Component', () => {
  const openMenuActionState = jest.fn();
  const currentUserState = { avatar: 'url' };
  const muiTheme = getMuiTheme();

  const shallowWithContext = node => shallow(node, { context: { muiTheme } });
  const mountWithContext = node => mount(node, { context: { muiTheme }, childContextTypes: { muiTheme: PropTypes.object } });

  injectTapEventPlugin();

  let shallowComponent;
  let mountComponent;


  describe('shallowWithContext', () => {
    beforeEach(() => {
      shallowComponent = shallowWithContext(<Header
        openMenuActionState={openMenuActionState}
        currentUserState={currentUserState}
      />);
    });

    it('renders without crashing', () => {
      expect(shallowComponent).toBeDefined();
    });
  });

  describe('mountWithContext', () => {
    beforeEach(() => {
      mountComponent = mountWithContext(<MemoryRouter>
        <Header
          openMenuActionState={openMenuActionState}
          currentUserState={currentUserState}
        />
                                        </MemoryRouter>);
    });

    it('renders without crashing', () => {
      expect(mountComponent).toBeDefined();
    });

    it('renders one AppBar', () => {
      expect(mountComponent.find('AppBar')).toHaveLength(1);
    });
  });
});
