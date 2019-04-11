import React, { Component } from 'react';
import Logo from '../components/Logo/Logo';
import LogoTypo from '../img/logo_typo.svg';

// import './Home.sass';

class Home extends Component {
  removeBG = (e) => {
    e === true ? 
      document.querySelectorAll(".section_theme_black")[0].classList.add = 'section_theme_black__hide-bg' : 
      document.querySelectorAll(".section_theme_black")[0].classList.remove = 'section_theme_black__hide-bg';
  }

  componentDidMount() {
    this.removeBG(true)
  }

  componentWillUnmount() {
    this.removeBG(false)
  }

  render() {
    return (
        <div className="home-page__main-container">
            <Logo logo={LogoTypo} size='l' />
        </div>
    );
  }
}

export default Home;