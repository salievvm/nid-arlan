import React, { Component } from 'react';
import Logo from '../components/Logo/Logo';

class Home extends Component {
  render() {
    const logo = '/img/logo_black_bg_clean.png';
    return (
        <div className="home-page__main-container">
            <Logo path={logo} size='l' />
        </div>
    );
  }
}

export default Home;