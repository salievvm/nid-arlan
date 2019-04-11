import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TagCloud from 'react-tag-cloud';
import Grid from '@material-ui/core/Grid';

// import randomColor from 'randomcolor';

class Team extends Component {
  state = {
    team: [
      {title: 'ГИП', fontSize: 40 },
      {title: 'Архитектор', fontSize: 28 },
      {title: 'Ландшафтный дизайнер', fontSize: 16 },
      {title: 'Инженер электрик', fontSize: 24 },
      {title: 'Инженер сметчик', fontSize: 24 },
      {title: 'Инженер СС', fontSize: 18 },
      {title: 'Инженер ОВ и ВК', fontSize: 24 },
      {title: 'Конструктор', fontSize: 16 },
    ]
  }
  // componentDidMount() {
  //   setInterval(() => {
  //     this.forceUpdate();
  //   }, 1000);
  // }
  render() {
    const { team } = this.state;

    return (
      <div>
        <Typography variant='h1'>Сотрудники компании Арлан</Typography>
        <Typography variant="subtitle1" gutterBottom >
          Штат нашей компании насчитывает 25 сотрудников.
        </Typography>
        <Typography variant="subtitle1" gutterBottom >
          Мы команда квалифицированных специалистов с опытом работы в области проектирования не менее 5 лет.
        </Typography>
        <Grid item md={8} xs={12}  >
        <TagCloud 
          style={{
            fontFamily: 'RopaSansPro',
            fontSize: 13,
            fontWeight: 500,
            color: '#fff',
            padding: 15,
            width: '100%',
            height: '300px',
            position: 'relative'
          }}>
          {team.map(person => {
            return <div key={person.title} style={{fontSize: person.fontSize}}>{person.title}</div>
          })}
        </TagCloud>
        </Grid>

      </div>
    );
  }
}



export default Team;