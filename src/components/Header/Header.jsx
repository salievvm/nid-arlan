import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <div className="main-header content">
            {this.props.children}
        </div>
    );
  }
}

export default Header;