import { Route } from 'react-router-dom';

import React from 'react';
import Home from './home';
import License from './license';
import ProfileContainer from './profile/ProfileContainer';


/**
 * Function that renders the <Routes> compoment of the <ReactApp> component.
 *
 * @export {function} Menu
 * @returns {ReactElement} markup
 */
export default function Routes() {
  return (
    <div className="row">
      <div className="col s12 m12">
        <div className="container containerApp">
          <Route exact path="/" component={Home} />
          <Route title="Profile" path="/profile-page" component={ProfileContainer} />
          <Route title="Compare Profiles" path="/compare-profiles" component={License} />
        </div>
      </div>
    </div>
  );
}
