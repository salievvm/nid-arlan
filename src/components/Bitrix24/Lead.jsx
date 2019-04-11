import React, { Component } from 'react';

import { DEFAULT_PATH, ASSIGNED_BY_ID, SOURCE } from '../Bitrix24/constants';

export default class LeadCreate extends Component {

    state = {
      result: [],
      error: null
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
          this.setState({ result })
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
  
    render() {
      const { result } = this.state;
      console.log('resultLeadCreate', result);

      return (
        <div>{result}</div>
      );
    }
}
