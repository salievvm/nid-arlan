import React, { Component } from 'react';
import './Sidebar.css';

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar sidebar_black">
        <div className="sidebar-inner">
          {this.props.children}
        </div>
      </div>

    );
  }
}

export default SideBar;