// SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class SurveyForm extends Component {
  render() {
    return (
      <div>
        SurveyForm
        <h5>Oh wow survey form</h5>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
