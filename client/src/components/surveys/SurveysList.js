import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSurveys} from '../../actions'
class SurveysList extends Component{
  componentDidMount() {
    this.props.fetchSurveys();
    console.log(this.props.surveys);
  }
  renderSurveys(){
    return this.props.surveys.map(survey => {
      return(
        <div class="card blue-grey darken-1" key={survey._id} >
          <div class="card-content white-text">
            <span class="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">{survey.lastResponded}</p>
          </div>
          <div class="card-action">
            <a href="#">Yes: {survey.yes}</a>
            <a href="#">No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }
  render(){
    return(
      <div>{this.renderSurveys()}</div>
    );
  }
}
const mapStateToProps = ({surveys})=>{
  return {surveys};
};
export default connect(mapStateToProps, {fetchSurveys})(SurveysList);
