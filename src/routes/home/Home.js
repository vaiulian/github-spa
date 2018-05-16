import React from 'react';

/**
 * Function that renders the <Home> component of the <ReactApp> component.
 *
 * @class Home
 * @extends {PureComponent}
 */


const Home = () => (<div>
  <h2>Welcome</h2>
  <p>This is an application that using the github developers API will
        fetch and show a basic user Profile.
  </p>
  <p>Fell free to check the menu for the Profile and Compare pages</p>
  <p>This project uses:</p>
  <ol className="enum">
    <li>ReactJS</li>
    <li>React-create-app as scaffolding</li>
    <li>Redux</li>
    <li>Thunk</li>
    <li>React router</li>
    <li>Material UI</li>
    <li>Other react libs and plugins (package.json)</li>
  </ol>
</div>); // eslint-disable-line

export default Home;
