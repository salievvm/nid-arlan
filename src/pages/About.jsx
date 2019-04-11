import React, { Component } from 'react';
import Button from '../components/Button/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Home extends Component {
  render() {
    return (
      <div>
        <Typography variant='h1'>О компании</Typography>
        <Grid item sm={12} lg={8} xl={6}>
          <Typography variant="body1" >
            Компания ТОО «Арлан» предоставляет полный спектр услуг по проектированию зданий и сооружении, инженерных сетей, благоустройства территории любой сложности. 
          </Typography>
          <Typography variant="body1" >
            Все разделы проекта (архитектурный, конструктивный, инженерные) разрабатываются собственными силами компании, что гарантирует слаженность работы смежных отделов и значительно повышает качество и скорость работы. 
          </Typography>
          <Typography variant="body1" >
            Сделав заказ в нашей компании, Вы получите индивидуальный проект и персональный подход. Мы выполняем ПСД на строительство и реконструкцию объектов, в рамках II категории Государственной лицензии на всей территории Республики Казахстан.
          </Typography>
          <Button 
              name="Заказать проект"
              theme="default"
              size="m" />
        </Grid>
      </div>
    );
  }
}

export default Home;