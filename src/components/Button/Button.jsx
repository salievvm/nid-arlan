import React, { Component } from 'react';
import './Button.sass';

class Button extends Component {
  render() {
      const { name, theme, size, dataHandle, handleClick } = { ...this.props },
            className=`button-rect button-rect__theme_${theme} button-rect__size-${size}`;
    return (
        <button data-handle={dataHandle} onClick={handleClick} className={className}>{name}</button>
    );
  }
}

export default Button;