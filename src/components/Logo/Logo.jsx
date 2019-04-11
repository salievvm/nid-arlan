import React, { Component } from 'react';
import './Logo.sass';

class Logo extends Component {
  state = {
    size: this.props.size
  }
  render() {
    const className = `logo logo__size-${this.state.size}`;
    return (
        <img className={className}  src={this.props.logo} alt="Логотип ТОО Арлан"/>
    );
  }
}

export default Logo;

