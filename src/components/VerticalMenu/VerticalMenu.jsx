import React, { Component } from 'react';
import ButtonBurger from '../ButtonBurger/ButtonBurger';
import VerticalMenuButton from '../VerticalMenuButton/VerticalMenuButton';

class VerticalMenu extends Component {
  render() {
    const items  = this.props.items;
    return (
        <nav className="vertical-menu">
            <ButtonBurger />
            <div className="vertical-menu__items">
                {
                    items.map(item => {
                        return <VerticalMenuButton
                                    icon={item.icon}
                                    name={item.name}
                                    page={item.page}
                                    key={item.page}
                                />
                    })
                }
            </div>
        </nav>
    );
  }
}

export default VerticalMenu;