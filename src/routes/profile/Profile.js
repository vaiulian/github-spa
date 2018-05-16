import React from 'react';
import PropTypes from 'prop-types';

import Loader from 'react-loader';
import RaisedButton from 'material-ui/RaisedButton';

import ProfileCard from './ProfileCard';


const Profile = ({ getGithubProfile, isProfileLoaded, githubProfile }) => (
  <div>
    <div>
      <h2>Welcome to the Pofile Page</h2>
      <p>Here you will see a random Github Profile with stats, name, country and bio.</p>
      <p>Hit Load Another to check a different profile each time.</p>
    </div>

    <Loader loaded={isProfileLoaded}>
      <ProfileCard {...githubProfile} />
      <RaisedButton primary onClick={getGithubProfile} label="Load Another" />
    </Loader>
  </div>
);

Profile.propTypes = {
  getGithubProfile: PropTypes.func.isRequired,
  isProfileLoaded: PropTypes.bool.isRequired,
  githubProfile: PropTypes.instanceOf(Object).isRequired,

};

export default Profile;
