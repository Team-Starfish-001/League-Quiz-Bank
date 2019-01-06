import React from 'react';
import Header from '../Header/Header';
import QuizObject from '../QuizObject/QuizObject';
var data = [





];
class StudentQuizView extends React.Component {
      constructor(props){
	super(props);
      }
      render(){
	return(
		<div>
			<Header/>
			<QuizObject data={data}/>
		</div>
	);
      }
}

export default StudentQuizView;