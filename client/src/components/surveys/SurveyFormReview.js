import React from 'react';
import {connect} from 'react-redux'
import formFields from './formFields';
import * as actions from '../../actions';
import {withRouter} from 'react-router-dom';
const SurveyFormReview= ({onCancel, formValues, submitSurvey, history} )=>{
  const renderContent= () => {
    return formFields.map(({label, name})=>{
      return (
        <div key={name}>
          <label>{label}</label>
          <div>{formValues[name]}</div>
        </div>
      );
    });
  };
  return(
    <div>
      <h5>Please confirm</h5>
      <div>
        {renderContent()}
      </div>
      <button className="btn-flat yellow darken-3 white-text" onClick={onCancel}>
        Back
      </button>
      <button className="btn-flat green right white-text" onClick={()=>submitSurvey(formValues, history)}>
      Send Survey
      <i className="material-icons right">email</i>
      </button>
    </div>
  );
};
function mapStateToProps(state){
    return {formValues: state.form.surveyForm.values};
}
export default connect(mapStateToProps,actions)(withRouter(SurveyFormReview));
