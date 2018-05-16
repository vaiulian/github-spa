import { Route } from 'react-router-dom';

import React from 'react';
import Home from './home';
import ProfileContainer from './profile/ProfileContainer';
import CompareContainer from './profile/compare/CompareContainer';


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
          <Route exact title="Profile" path="/profile" component={ProfileContainer} />
          <Route title="Compare Profiles" path="/profile/compare" component={CompareContainer} />
        </div>
      </div>
    </div>
  );
}
