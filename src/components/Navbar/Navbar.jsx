import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar">
            {this.props.page}
        </nav>
    );
  }
}

export default Navbar;