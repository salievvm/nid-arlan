import React, { Component } from 'react';
import ActionbarButton from '../ActionbarButton/ActionbarButton';
import './Actionbar.sass';

class Actionbar extends Component {
  render() {
    const  items = this.props.items;
    return (
        <nav className="actionbar">
            {
                items.map(item => {
                    return <ActionbarButton
                            icon={item.icon}
                            name={item.name}
                            key={item.name}
                             />
                })
            }
        </nav>
    );
  }
}

export default Actionbar;