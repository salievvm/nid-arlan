import React, { Component } from 'react';
import './Page.css';

class Page extends Component {
  render() {
    return (
        <section className="section section_theme_black">
            {this.props.children}
        </section>
    );
  }
}

export default Page;