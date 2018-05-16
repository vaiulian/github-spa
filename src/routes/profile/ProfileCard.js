import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardHeader, CardText } from 'material-ui/Card';
import Badge from 'material-ui/Badge';

const ProfileCard = ({
  name, location, avatar_url, bio, login, followers, winner,
}) => (
  <Card expanded className="AppCard">
    { winner && <Badge
      className="AppBadge"
      badgeContent="winner"
      secondary
    /> }
    <CardHeader
      title={name}
      subtitle={location}
      avatar={avatar_url} // eslint-disable-line
    />
    <CardText expandable>
      {bio}
    </CardText>
    <CardText expandable>
      <p>username: {login}</p>
    </CardText>
    <CardText expandable>
      <p>followers: {followers}</p>
    </CardText>
  </Card>
);

ProfileCard.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  avatar_url: PropTypes.string,
  bio: PropTypes.string,
  login: PropTypes.string,
  followers: PropTypes.number,
  winner: PropTypes.bool,
};

ProfileCard.defaultProps = {
  name: '',
  location: '',
  avatar_url: '',
  bio: '',
  login: '',
  followers: 0,
  winner: false,
};

export default ProfileCard;
