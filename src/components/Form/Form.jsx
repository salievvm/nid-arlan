import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PhoneFormatCustom from './NumberFormat';
import LeadCreate from '../Bitrix24/Lead';

export default class FormDialog extends React.Component {
  state = {
    formFields: {},
    formData: new FormData(),
    isSending: false,
  }

  componentDidMount() {
    const { data } = this.props;
    const formFields = [],
          isSending = false;
    data.fields.map(field => formFields[field.id] = {id: field.id, value: ''});
    this.setState( {formFields, isSending} );
  }

  handleFieldChange = (e) => {
    const formFields = this.state.formFields;
          formFields[e.currentTarget.id].value = e.currentTarget.value;
    this.setState( {formFields });
  }

  handleSubmit = (e) => {    
    e.preventDefault();
    const formData = new FormData(),
          fields = this.state.formFields;

    Object.keys(fields).forEach(key => {
      formData.append(fields[key].id, fields[key].value);
      console.log(fields[key].id, fields[key].value);
    });    
    const isSending = true;
    this.setState( { isSending, formData } );
  }

  render() {
    const { toggleForm, isFormOpen, data } = this.props;
   
    return (
      <div>
        <Dialog
          open={isFormOpen}
          onClose={toggleForm}
          aria-labelledby="form-dialog-title"
        >
          {this.state.isSending ? <LeadCreate formData={this.state.formData} formTitle={data.title} /> : false  }
          <form onSubmit={this.handleSubmit}>
          <DialogTitle id="form-dialog-title">{data.title}</DialogTitle>
          <DialogContent>
            <DialogContentText>{data.subtitle}
            </DialogContentText>
            {data.fields.map(field =>
              field.id !== 'PHONE' ?
              <TextField
                autoFocus={field.autoFocus}
                margin="dense"
                id={field.id}
                key={field.id}
                label={field.label}
                type={field.type}
                required={field.required}
                onChange={this.handleFieldChange}
                fullWidth /> :
              <TextField
                autoFocus={field.autoFocus}
                margin="dense"
                id={field.id}
                key={field.id}
                label={field.label}
                type={field.type}
                required={field.required}
                onChange={this.handleFieldChange}
                InputProps={{
                  inputComponent: PhoneFormatCustom,
                }}
                fullWidth />
            )}
          </DialogContent>
          <DialogActions>
            <Button type="submit" color="primary">
              Отправить заявку
            </Button>
            <Button onClick={toggleForm} color="primary">
              Закрыть
            </Button>
          </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}
