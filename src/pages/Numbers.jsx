import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Numbers extends Component {
  state = {
    items: [
      {
        title: 'Объектов',
        subtitle: 'Проекты по освещению, молниезащите и заземлению',
        number: 200
      },
      {
        title: 'Км улицы',
        subtitle: 'Освещение магистралей, городских улиц, скверов',
        number: 250
      },
      {
        title: 'Тыс м2',
        subtitle: 'Площадь всех обектов, в проектировании которых мы участвовали',
        number: 300
      },
      {
        title: 'Лет',
        subtitle: 'Компания Арлан на рынке проектирования',
        number: 10
      },
    ],
    styles: {
      typography: {
        h2: {
          fontWeight: 500
        }
      }
    }
  }
  render() {
    const { items } = this.state;

    return (
      <div>
        <Typography variant='h1'>Показатели за 2018 год</Typography>
        <Grid item xs={12} >
          <Grid container justify="space-between" spacing={24}>
            {items.map(value => (
              <Grid key={value.number} md={4} sm={6} xs={12} item>
                  <Typography variant="h2" style={{fontWeight:500}} >
                    {value.number}
                  </Typography>
                  <Typography variant="h6" style={{textTransform:'uppercase'}} >
                    {value.title}
                  </Typography>
                  <Typography variant="subtitle1" >
                    {value.subtitle}
                  </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    );
  }
}



export default Numbers;