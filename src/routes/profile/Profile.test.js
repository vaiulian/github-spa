import React from 'react';
import { shallow } from 'enzyme';

import Profile from './Profile';

describe('Profile Component', () => {
  fit('renders without crashing', () => {
    shallow(<Profile />);
  });
});
