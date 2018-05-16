/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';


const Profile = ({ getGithubCompareProfiles }) => <div><h2>Welcome to Compare</h2><button onClick={getGithubCompareProfiles}>more</button></div>;

Profile.propTypes = {
  getGithubCompareProfiles: PropTypes.func.isRequired,
};

export default Profile;
