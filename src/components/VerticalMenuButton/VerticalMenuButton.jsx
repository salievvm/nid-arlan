import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './VerticalMenuButton.sass';

class VerticalMenuButton extends Component {
  render() {
    const { icon, name, page } = { ...this.props };
    console.log('this.props.items', this.props);
    return (
        <NavLink 
          exact
          className="vertical-menu__button"
          activeClassName="vertical-menu__button_active"
          title={name}
          key={page}
          to={`/${page}`} >
          <img src={icon} alt={name} className="vertical-menu__icon" />
        </NavLink>
    );
  }
}

export default VerticalMenuButton;