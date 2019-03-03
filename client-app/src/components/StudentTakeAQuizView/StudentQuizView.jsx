import React from 'react';
import Header from '../Header/Header';
import QuizObject from '../QuizObject/QuizObject';
var data = [
    {
    index: 1,
    prompt: "What is 1+2=?",
    type: "single",
    choices:[
	{
		answer:"1"
	},
	{
		answer:"2"
	},
	{
		answer:"4"
	}
    ]
    },
    {
    index:2,
    prompt:"What is the capital of California?",
    type:"single",
    choices:[
	{
		answer: "Indiana"
	},
	{
		answer: "Wyoming"
	},
	{
		answer: "North America"
	}
    ]
    },
    {
    index: 3,
    prompt: "What is 1+5=?",
    type: "multiple",
    choices:[
        {
                answer:"1"
        },
        {
                answer:"2"
        },
        {
                answer:"4"
        }
    ]
    },
    {
    index: 4,
    prompt: "Write code",
    type: "fill",
    },




];
class StudentQuizView extends React.Component {
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