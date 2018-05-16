import React from 'react';
import PropTypes from 'prop-types';

import Loader from 'react-loader';
import RaisedButton from 'material-ui/RaisedButton';

import ProfileCard from './../ProfileCard';


const Compare = ({ getGithubCompareProfiles, isProfileCompareLoaded, githubCompareProfiles }) => (
  <div>
    <div>
      <h2>Welcome to the Compare Page</h2>
      <p>Here you will see two random Github Profile with stats, name, country and bio.</p>
      <p>Also the one with the most followers is highlighted.</p>
      <p>Hit Check Again to check a different set of profiles.</p>
    </div>

    <Loader loaded={isProfileCompareLoaded}>

      <div className="Compare">
        {githubCompareProfiles.map(profile => (
          <ProfileCard key={profile.id} {...profile} />
        ))}
      </div>

      <RaisedButton primary onClick={getGithubCompareProfiles} label="Check Again" />
    </Loader>
  </div>
);

Compare.propTypes = {
  getGithubCompareProfiles: PropTypes.func.isRequired,
  isProfileCompareLoaded: PropTypes.bool.isRequired,
  githubCompareProfiles: PropTypes.instanceOf(Array).isRequired,

};

export default Compare;
