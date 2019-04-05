import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  render() {
    return (
        <div className="main content">
            {this.props.children}
        </div>
    );
  }
}

export default Main;