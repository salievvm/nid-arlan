import React, { Component } from 'react';
import ActionbarButton from '../ActionbarButton/ActionbarButton';
import './Actionbar.sass';

class Actionbar extends Component {
  render() {
    const { items, handleClick } = this.props;
    return (
        <nav className="actionbar">
            {
                items.map(item => {
                    return <ActionbarButton
                            icon={item.icon}
                            name={item.name}
                            href={item.href}
                            handleClick={handleClick}
                            key={item.name}
                             />
                })
            }
        </nav>
    );
  }
}

export default Actionbar;