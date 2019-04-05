import React, { Component } from 'react';
import Button from '../components/Button/Button';

class License extends Component {
  render() {
    return (
      <div>
        <h1 className="page-main-title">Лицензия второй категории</h1>
        <div className="page-content__col-8">
            <div className="page-content__row">
              <div className="container-margin">
                <img src="/img/icons/pdf.png" alt="Лицензия на проведение работ.pdf" className="license__image-pdf" />
              </div>
              <article>
                <p className="article-text article-text__no-top">
                  Компания «Арлан» имеет государственную лицензию 2 категории по всем видам проектных работ.
                </p>
                <p className="article-text">
                  Штат работников компании укомплектован только квалифицированными специалистами с опытом работы в области проектирования не менее 5 лет.
                </p>
                <Button 
                  name="Открыть лицензию"
                  theme="default"
                  size="m" />
              </article>
            </div>
        </div>
      </div>
    );
  }
}

export default License;