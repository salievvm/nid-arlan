import React, { Component } from 'react';
import Button from '../components/Button/Button';

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="page-main-title">О компании</h1>
        <div className="page-content__col-8">
            <article>
              <p className="article-text">
                Компания ТОО «Арлан» предоставляет полный спектр услуг по проектированию зданий и сооружении, инженерных сетей, благоустройства территории любой сложности. 
              </p>
              <p className="article-text">
                Все разделы проекта (архитектурный, конструктивный, инженерные) разрабатываются собственными силами компании, что гарантирует слаженность работы смежных отделов и значительно повышает качество и скорость работы. 
              </p>
              <p className="article-text">
                Сделав заказ в нашей компании, Вы получите индивидуальный проект и персональный подход. Мы выполняем ПСД на строительство и реконструкцию объектов, в рамках II категории Государственной лицензии на всей территории Республики Казахстан.
              </p>
            </article>
            <Button 
              name="Заказать проект"
              theme="default"
              size="m" />
        </div>
      </div>
    );
  }
}

export default Home;