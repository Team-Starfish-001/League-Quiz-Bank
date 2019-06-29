import React from 'react';
import QuestionObject from '../QuestionObject/QuestionObject';
class QuizObject extends React.Component {
  submitForms(){
      
  }
  render(){
    return(
      <div>
        {this.props.data.map((e)=><QuestionObject data={e}/>)}
        <input type='button' value='Submit' onclick={this.submitForms()} />
      </div>
    );
  }
}
export default QuizObject;