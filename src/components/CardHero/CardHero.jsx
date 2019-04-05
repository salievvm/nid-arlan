import React, { Component } from 'react';
import Slider  from '../SliderGraphic/SliderGraphic';

class Projects extends Component {
  render() {
    const { arGraphicElements, header, footer } = { ...this.props }
    return (
      <div className="card-hero">
        <div className="card-hero__header">
            <p className="article-title">{header}</p>
        </div>
        <div className="card-hero__body">
            {
                arGraphicElements.map(element => {
                    return <Slider type={element.type} 
                            src={element.src}
                            alt={element.name}
                            key={element.name}
                             />
                })
            }
        </div>
        <div className="card-hero__footer">{footer}</div>
      </div>
    );
  }
}

export default Projects;