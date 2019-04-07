import React, { Component } from 'react';
import CreateQuestionObject from '../createQuestionObject/CreateQuestionObject';

class TeacherCreateQuizView extends Component {
	constructor(props){
		super(props);
		this.state = {
			   questionAmtSelectedValue: 10,
			   form_data: {
				title: "",
				desc: "",
				tags: "",
				amt: 10,
				questions: null
			}
		};
	}

  	onChange=(e)=>{
		var amt = (parseInt(e.target.value)) ? parseInt(e.target.value) : 10;
		if(amt > 100 || amt < 1){
			amt = 10
		}
		var questions= [];
		var questionBase={id: 1,
			questionType:"single",
			question:"",
			answerOne:"",
			answerTwo:"",
			optionOne:"",
			optionTwo:"",
			optionThree:""}
		for(var i = 1; i < amt +1; i++){
			questionBase.id = i;
			questions.push(questionBase)
		}
		this.setState({
			questionAmtSelectedValue: amt,
			form_data: {
				title: this.state.form_data.title,
				desc: this.state.form_data.desc,
				tags: this.state.form_data.tags,
				amt: amt,
				questions: questions
			}
		});
		console.log(this.state)
	}

	handleQuestion=(_state)=>{
		console.log(_state)
	}

	submitForms =()=>{

	}

    render(){
		return(
			<div>
				Amount of Questions: <input type="text" name="question_amt" onChange={this.onChange} /><br/>
				<form id="data">
					Title: <input type="text" name="Title"/><br/>
					Desc: <input type="text" name="Desc"/><br/>
					Tags: <input type="text" name="Tags"/><br/>
				</form><br/>
				{Array.from(Array(this.state.questionAmtSelectedValue).keys()).map((e)=><CreateQuestionObject index={e+1} handleQuestion={this.handleQuestion} />)}
				<input type="submit" className="button" value="Submit" onClick={this.submitForms()}/>
			</div>
			
	);
      }
}

export default TeacherCreateQuizView;