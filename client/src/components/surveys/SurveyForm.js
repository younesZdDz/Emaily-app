import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import _ from 'lodash';
import formFields from './formFields';
class SurveyForm extends Component{
  renderFields(){
    return formFields.map( ( {label, name} ) => {
      return(
        <Field label={label} type="text" name={name} component={SurveyField} key={name} />
      );
    });
  }
  render(){
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="left red btn-flat white-text">Cancel</Link>
          <button type="submit" className="right teal btn-flat white-text">
            Envoyer
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}
function validate(values){
  const errors={};
  errors.recipients = validateEmails(values.recipients || '');
  _.each(formFields, ({name}) => {
    if (!values[name])
      errors[name]='you must provide a value';
  } );
  return errors ;
}
export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
