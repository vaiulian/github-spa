/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { Link } from 'react-router-dom';

/**
 * Function that renders the <Menu> compoment of the <ReactApp> component.
 *
 * @export {function} Menu
 * @param {Object} openedDrawerState - Object of mapStateToProps Container
 * @param {Object} closeMenuActionState - Function of mapDispatchToProps Container
 * @returns {ReactElement} markup
 */
export default function Menu({ openedDrawerState, closeMenuActionState }) {
  return (
    <div className="AppMenu">
      <Drawer
        docked={false}
        width={200}
        open={openedDrawerState}
        onRequestChange={closeMenuActionState}
      >
        <div className="AppMemu-items">
          <MenuItem className="linkToHome" onTouchTap={closeMenuActionState}>
            <Link className="valign-wrapper" to="/">
                            Home
            </Link>
          </MenuItem>
          <MenuItem className="linkToProfile" onTouchTap={closeMenuActionState}>
            <Link className="valign-wrapper" to="/profile">
                            Profile
            </Link>
          </MenuItem>
          <MenuItem className="linkToLicense" onTouchTap={closeMenuActionState}>
            <Link className="valign-wrapper" to="/profile/compare">
                            Compare
            </Link>
          </MenuItem>
        </div>
      </Drawer>
    </div>
  );
}

Menu.propTypes = {
  closeMenuActionState: PropTypes.func.isRequired,
  openedDrawerState: PropTypes.bool.isRequired,
};
