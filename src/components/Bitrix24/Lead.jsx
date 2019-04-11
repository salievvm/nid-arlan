import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { DEFAULT_PATH, ASSIGNED_BY_ID, SOURCE } from '../Bitrix24/constants';

export default class LeadCreate extends Component {

    state = {
      result: [],
      error: null,
      resultDialog: {
        success: {
          title: 'Заявка успешно отправлена!',
          subtitle: 'Мы свяжемся с Вами по указанному номеру в ближайшее время.'
        },
        error: {
          title: 'Что-то пошло не так :(',
          subtitle: 'Попробуйте повторить ещё раз'
        }
      },
      dialogOpen: false
    }
    
    createLead = (formData) => {
      fetch(
        (`${DEFAULT_PATH}/crm.lead.add.json`),
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({fields: formData})
        })
        .then(res => res.json())
        .then(({ result }) => {
          this.setState({ result, dialogOpen: true });
        })
        .catch(error => this.setState({ error }))
    }


    componentDidMount() {
      const { formData, formTitle } = this.props,
            formDataFields = {};

      const title = SOURCE.NAME+', '+formTitle;
      formData.append('SOURCE_ID', SOURCE.ID);
      formData.append('TITLE', title);
      formData.append('ASSIGNED_BY_ID', ASSIGNED_BY_ID);
      
      for (let pair of formData.entries()) {
        if (pair[0] === "PHONE" || pair[0] === "EMAIL")
          formDataFields[pair[0]] = [ { "VALUE": pair[1], "VALUE_TYPE": "WORK" } ];
        else
          formDataFields[pair[0]] = pair[1];
      }
      console.log('formDataFields', formDataFields);
      this.createLead(formDataFields);
    }

    handleClose = () => {
      this.setState({ dialogOpen: false }, () => this.props.handleLeadResult());
    };
  
  
    render() {
      const result = (this.state.result !== undefined && this.state.result) ? 'success' : 'error';
      console.log('resultLeadCreate', result);

      return (
        <>
        {this.state.dialogOpen ? 
          <Dialog
          open={this.state.dialogOpen}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{this.state.resultDialog[result].title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.state.resultDialog[result].subtitle}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Закрыть
            </Button>
          </DialogActions>
        </Dialog>
        : false}
        </>
      );
    }
}
