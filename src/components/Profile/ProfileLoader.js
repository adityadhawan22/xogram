import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../common/logo.png';

class ProfileLoader extends Component {
  render() {
    return (
      <div id="loader">
        <div className="loader-wrap">
          <div className="baby"> <img src={logo} width="120px" /> </div>
        </div>
      </div>
      );
  }
}

export default ProfileLoader;