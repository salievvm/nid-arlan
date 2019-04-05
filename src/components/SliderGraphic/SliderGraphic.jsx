import React, { Component } from 'react';
import Button from '../components/Button/Button';

class SliderGraphic extends Component {
  render() {
      const { type, src, alt, name } = this.props;
    return (
      <div>
        <h1 className="page-main-title">ВЫПОЛНЕННЫЕ ПРОЕКТЫ КОМПАНИИ АРЛАН</h1>
        <div className="page-content__row">
          <div className="container-margin">
            <img src="/img/icons/pdf.png" alt="Лицензия на проведение работ.pdf" className="license__image-pdf" />
          </div>
        </div>
      </div>
    );
  }
}

export default SliderGraphic;