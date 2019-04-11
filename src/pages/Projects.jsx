import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '../components/Card/Card';


class Projects extends Component {
  state = {
    projects: [
      {
        name: 'Освещение пр. Абылай-хана',
        image: '/img/static/abylai.jpg',
        content: [
          '5 км уличного освещения',
          '270 опор для троллейбусных линии',
          'Более 300 светильников',
        ]
      },
      {
        name: 'БЦ Нурсая',
        image: '/img/static/bcnur.jpg',
        content: [
        'Внутреннее освещение',
        'Расчет освещенности',
        ]
      },
      {
        name: 'БЦ Москва, г. Нур-Султан',
        image: '/img/static/moskva.jpg',
        content: [
        'Силовое электрооборудование',
        'Внутреннее электроосвещение',
        'Розеточные сети',
        'Слаботочные сети',
        ]
      },
      {
        name: 'КазАэроНавигация, г. Нур-Султан',
        image: '/img/static/kazaer.jpg',
        content: [
          'Силовое электрооборудование',
          'Внутреннее электроосвещение',
          'Розеточные сети',
          'Слаботочные сети',
          'Заземление и молниезащита',
         ]
      },
      {
        name: 'Футбольный стадион, г. Кызылорда',
        image: '/img/static/footbal.jpg',
        content: [
          'Расчет спортивного освещения стадиона',
          'Расстановка мачт с прожекторами',
          'Расчет углов установки прожекторов',
        ]
      },
      {
        name: 'Здание КНБ, г. Нур-Султан',
        image: '/img/static/knb.png',
        content: [
          'Многоуровневая система заземления',
          'Система молниезащиты',
          'Наружное освещение',
        ]
      },
    ],
  }
  render() {
    const { projects } = this.state;
    return (
      <div>
        <Typography variant='h1'>ВЫПОЛНЕННЫЕ ПРОЕКТЫ КОМПАНИИ АРЛАН</Typography>
        <Grid container justify="flex-start" spacing={24}>
          {projects.map(value => 
            <Grid xs={12} sm={6} md={4} lg={3} xl={2} item>
              <Card 
                key={value.image}
                name={value.name}
                image={value.image}
                content={value.content}
                    />
            </Grid>
          )}
        </Grid>
      </div>
    );
  }
}

export default Projects;