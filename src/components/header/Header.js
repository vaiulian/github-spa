/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';

/**
 * Function that renders the <Header> component of the <ReactApp> component.
 *
 * @export {function} Header
 * @param {Object} openMenuActionState - Function of mapDispatchToProps Container
 * @returns {ReactElement} markup
 */
export default function Header({ openMenuActionState }) {
  return (
    <div className="App-header">
      <AppBar
        iconStyleLeft={{ marginLeft: '-10px' }}
        onLeftIconButtonClick={openMenuActionState}
        title={
          <div className="App-login-logo" />
            }
      />
    </div>
  );
}

Header.propTypes = {
  openMenuActionState: PropTypes.func.isRequired,
};
