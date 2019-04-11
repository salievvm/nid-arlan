import React, { Component } from 'react';
import Logo from '../components/Logo/Logo';
import LogoTypo from '../img/logo_typo.svg';

import './Home.sass';

class Home extends Component {
  render() {
    return (
        <div className="home-page__main-container">
            <Logo logo={LogoTypo} size='l' />
        </div>
    );
  }
}

export default Home;