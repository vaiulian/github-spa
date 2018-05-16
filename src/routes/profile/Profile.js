/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';


const Profile = ({ getGithubProfile }) => <div><h2>Welcome to Pofile</h2><button onClick={getGithubProfile}>more</button></div>;

Profile.propTypes = {
  getGithubProfile: PropTypes.func.isRequired,
};

export default Profile;
