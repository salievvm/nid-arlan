import React, { Component } from 'react';
import Button from '../components/Button/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class License extends Component {
  render() {
    return (
      <div>
        <Typography variant='h1'>Лицензия второй категории</Typography>
        <Grid item xs={12} lg={8} xl={6}  >
        <div className="page-content__row">

          <div className="container-image__license container-margin">
            <img src="/img/icons/pdf.png" alt="Лицензия на проведение работ.pdf" className="license__image-pdf" />
          </div>
          <article>

            <Typography variant="body1" >
              Компания «Арлан» имеет государственную лицензию 2 категории по всем видам проектных работ.
            </Typography>
            <Typography variant="body1" >
            Штат работников компании укомплектован только квалифицированными специалистами с опытом работы в области проектирования не менее 5 лет.
            </Typography>
            <Button 
                  name="Открыть лицензию"
                  theme="default"
                  size="m" />
              </article>

                  </div>
        </Grid>
      </div>
    );
  }
}

export default License;