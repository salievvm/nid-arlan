import React, { Component } from 'react';
import './ActionbarButton.sass';

class ActionbarButton extends Component {
  render() {
    const  { icon, name, href, handleClick } = { ...this.props }
    return (
        <button className="actionbar-button actionbar-button__white" onClick={handleClick} data-handle={href}>
            <span className="actionbar-button__title">{name}</span>
            <img src={icon} alt={name} className="actionbar-button__icon" />
        </button>
    );
  }
}

export default ActionbarButton;