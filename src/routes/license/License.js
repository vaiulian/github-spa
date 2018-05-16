import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import { getCurrentLicenseAction } from './LicenseActions';


/**
 * Function that renders the <License> component of the <ReactApp> component.
 *
 * @export {function} <License>
 * @class License
 * @extends {Component}
 */
export class License extends Component {
  /**
     * Lifecycle method.
     * Calls function to get the current license from server first time the
     * component mounted.
     *
     * @memberof License
     * @returns {void}
     */
  componentDidMount() {
    this.props.getCurrentLicenseAction();
  }

  /**
     * Render function of <License>
     *
     * @returns {ReactElement} markup
     * @memberof License
     */
  render() {
    const { currentLicenseState, isFullyLoadedState } = this.props;

    return (
      <div>
        <Loader loaded={isFullyLoadedState}>
          <div className="licenseRows">
            <p>Account Name: <b>{currentLicenseState.accountNames}</b></p>
            <p>Domain: <b>{currentLicenseState.domain}</b></p>
            <p>License Type: <b>{currentLicenseState.licenseTypes}</b></p>
            <p>Product Name: <b>{currentLicenseState.products}</b></p>
            <p>Expiration Date: <b>{currentLicenseState.expirationDates}</b></p>
          </div>
        </Loader>
      </div>
    );
  }
}

License.propTypes = {
  getCurrentLicenseAction: PropTypes.func.isRequired,
  currentLicenseState: PropTypes.instanceOf(Object).isRequired,
  isFullyLoadedState: PropTypes.bool.isRequired,
};

/**
 * Container part of the <License> component
 *
 * Function that tells how to transform the current Redux store
 * state into props for the presentational component
 *
 * @param {Object} state - current state of the Application
 * @returns {Object} containing the props to be used in the presentational component
 */
export const mapStateToProps = state => ({
  isFullyLoadedState: state.License.isFullyLoaded,
  currentLicenseState: state.License.currentLicense,
});

export default connect(
  mapStateToProps,
  { getCurrentLicenseAction },
)(License);
