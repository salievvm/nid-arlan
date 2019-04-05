import React, { Component } from 'react';
import './Button.sass';

class Button extends Component {
  render() {
      const { name, theme, size } = { ...this.props },
            className=`button-rect button-rect__theme_${theme} button-rect__size-${size}`;
    return (
        <button className={className}>{name}</button>
    );
  }
}

export default Button;