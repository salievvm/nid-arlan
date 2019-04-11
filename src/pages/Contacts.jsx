import React, { Component } from 'react';
import GoogleMap from '../components/GoogleMap/GoogleMap';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// import randomColor from 'randomcolor';

class Team extends Component {
  
  render() {

    return (
      <div>
        <Typography variant='h1'>Реквизиты</Typography>
        <Grid container justify="space-between" spacing={24}>
          <Grid item xs={12} md={7} xl={6}  >
            <Typography variant="subtitle1" gutterBottom >
              Товарищество с ограниченной ответственностью «Арлан»<br />
              Адрес: РК, 050000, г. Алматы, Алмалинский район, ул. Желтоксан, дом 71/73, кв. 56<br />
              БИН 940540002772<br />
              Свидетельство о постановке по НДС: серия №62001 №1015111 от 21.01.19г.<br />
              АО «Банк Центр Кредит»<br />
              БИК KCJBKZKX<br />
              ИИК KZ338562203105858682<br />
              Директор: Джангалиев Абзал Алмабекович<br />
              Телефон: +7 775 329 9432<br />
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} xl={6}  >
            <Typography variant="subtitle1" gutterBottom >
              <GoogleMap />
              {/* <img style={{borderRadius: '15px', width: '100%'}} src="/img/map.png" alt=""/> */}
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}



export default Team;