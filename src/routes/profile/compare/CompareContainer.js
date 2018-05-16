import { connect } from 'react-redux';
import Compare from './Compare';
import { getGithubCompareProfiles } from './../ProfileActions';

/**
 * Function that tells how to transform the current Redux store
 * state into props for the presentational component
 *
 * @param {Object} state - current state of the Application
 * @returns {Object} containing the props to be used in the presentational component
 */
export const mapStateToProps = state => ({
  isProfileCompareLoaded: state.Profile.isProfileCompareLoaded,
  githubCompareProfiles: state.Profile.githubCompareProfiles,
});

/**
 * Function that tells how to transform the current Redux store
 * actions into props for the presentational component
 *
 * @param {Function} dispatch - method of the redux store
 * @returns {Object} callback props that you want to inject into
 * the presentational component
 */
export const mapDispatchToProps = dispatch => ({
  getGithubCompareProfiles: () => {
    dispatch(getGithubCompareProfiles());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Compare);
