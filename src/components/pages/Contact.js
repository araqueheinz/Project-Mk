// Import React
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { submitForm } from '../../Redux/actions/index'

import Button from '@material-ui/core/Button';

class Contact extends React.Component {

  renderError({ touched, error }) {

    if(touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {

   return ( 
     <div className="field">
       <label>{label}</label>
       <input {...input} autoComplete="off" />
       {this.renderError(meta)}
     </div>
   )
  }

  onSubmit = (formValues) => {
    // this.props.submitForm(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error" >
        <Field name="firstName" label="First Name" component={this.renderInput}/>
        <Field name="lastName" label="Last Name" component={this.renderInput}/>
        <Field name="email" label="Email" component={this.renderInput}/>
        <Field name="message" label="Message" component={this.renderInput}/>
        <Button variant="contained" color="primary">Submit</Button>
      </form>
    )
  }
} 

const validate = (formValues) => {
  const errors = {};

  if(!formValues.firstName) {
    errors.firstName = 'You must enter your first name';
  }

  if (!formValues.lastName) {
    errors.lastName = 'You must enter your last name';
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formValues.email)) {
    errors.email = 'You must enter a valid email';
  }

  if (!formValues.message) {
    errors.message = 'You must enter a message';
  }

  return errors;
}

const formWrapped = reduxForm({
  form: 'contactForm',
  validate: validate
})(Contact);



export default connect(null, submitForm)(formWrapped);