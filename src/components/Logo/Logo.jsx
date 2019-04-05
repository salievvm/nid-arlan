import React, { Component } from 'react';
import './Logo.sass';
import logo from '../../logo_black_bg_clean.png';

class Logo extends Component {
  state = {
    size: this.props.size
  }
  render() {
    const className = `logo logo__size-${this.state.size}`;
    return (
        <img className={className}  src={logo} alt="Логотип ТОО Арлан"/>
    );
  }
}

export default Logo;

