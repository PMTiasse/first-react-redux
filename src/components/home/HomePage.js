/**
 * Created by Pat on 9/10/2016.
 */
import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render () {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, Redux and React Router n  ES6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
