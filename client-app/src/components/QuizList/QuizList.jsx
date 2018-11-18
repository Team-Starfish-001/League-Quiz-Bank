import React, { Component } from 'react';
import Quiz from '../Quiz/Quiz.jsx';

class QuizList extends Component {
    render() {
        return (
	       <div>
	       {this.props.data.map((e)=><Quiz data={e} />)}
	       </div>
	);
    }
}

export default QuizList;
