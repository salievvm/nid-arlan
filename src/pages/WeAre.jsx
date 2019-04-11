import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Home extends Component {
  render() {
    return (
      <div>
        <Typography variant='h1'>Направления проектирования</Typography>
        <Grid item sm={12} lg={8} xl={6}>
          <Typography variant="body1" >
            Мы выполняем абсолютно весь комплекс проектных работ — от первых консультаций и разработки архитектурной концепции — до выполнения рабочей документации в полном или необходимом Заказчику объёме.  
          </Typography>
          <ul className="article-text">
            <li>Освещение улиц, парков</li>
            <li>Освещение  производственных помещений</li>
            <li>Инженерные сети всех видов и любой сложности</li>
            <li>Благоустройство территории</li>
            <li>Жилые комплексы</li>
            <li>Бизнес центры, гостиницы</li>
            <li>Торговые центры</li>
            <li>Административные здания</li>
          </ul> 
          <Typography variant="body1" >
            В случае необходимости мы предоставляем дополнительные услуги по сопровождению проекта, до получения положительного заключения экспертизы, получению необходимых согласований, авторскому надзору за строительством.
          </Typography>
        </Grid>
      </div>
    );
  }
}

export default Home;