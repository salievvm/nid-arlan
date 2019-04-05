import React, { Component } from 'react';
import './ActionbarButton.sass';

class ActionbarButton extends Component {
  render() {
    const  { icon, name } = { ...this.props }
    return (
        <button className="actionbar-button">
            <span>{name}</span>
            <img src={icon} alt={name} className="actionbar-button__icon" />
        </button>
    );
  }
}

export default ActionbarButton;