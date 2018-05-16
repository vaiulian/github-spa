import { connect } from 'react-redux';
import Profile from './Profile';
import { getGithubProfile } from './ProfileActions';

/**
 * Function that tells how to transform the current Redux store
 * state into props for the presentational component
 *
 * @param {Object} state - current state of the Application
 * @returns {Object} containing the props to be used in the presentational component
 */
export const mapStateToProps = state => ({
  isProfileLoaded: state.Profile.isProfileLoaded,
  githubProfile: state.Profile.githubProfile,
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
  getGithubProfile: () => {
    dispatch(getGithubProfile());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
