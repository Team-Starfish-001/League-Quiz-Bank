import React from 'react';
import QuestionObject from '../QuestionObject/QuestionObject';
class QuizObject extends React.Component {
      render(){
	return(
		<div>
		{this.props.data.map((e)=><QuestionObject data={e}/>)}
		</div>
	);
      }
}
export default QuizObject;