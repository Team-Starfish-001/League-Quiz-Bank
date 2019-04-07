import React, { Component } from 'react';

class CreateQuestionObject extends Component {
      constructor(props){
		super(props);
		this.state = {
			id: this.props.index,
			questionType:"single",
			question:"",
			answerOne:"",
			answerTwo:"",
			optionOne:"",
			optionTwo:"",
			optionThree:""
		};
	  }
	  QuestionChange(){
		this.props.handleQuestion(this.state);
	  }
      onChangeType =(e)=>{
		  this.setState({
			  questionType:e.target.value,
			  answerOne:"",
			answerTwo:"",
			optionOne:"",
			optionTwo:"",
			optionThree:""
		}, this.QuestionChange)
	  }
	  onChangequestion =(e)=>{
		this.setState({question:e.target.value}, this.QuestionChange)
		}
		onChangeAnswerOne =(e)=>{
			this.setState({answerOne:e.target.value}, this.QuestionChange)
		}
		onChangeAnswerTwo =(e)=>{
			this.setState({answerTwo:e.target.value}, this.QuestionChange)
		}
		onChangeOptionOne =(e)=>{
			this.setState({optionOne:e.target.value}, this.QuestionChange)
		}
		onChangeOptionTwo =(e)=>{
			this.setState({optionTwo:e.target.value}, this.QuestionChange)
		}
		onChangeOptionThree =(e)=>{
			this.setState({optionThree:e.target.value}, this.QuestionChange)
		}
      getAnswerPrompt(){
		switch(this.state.questionType){
			case "fill":
			return(<div>
				Answer:  <input type="text"  name="answer-1" value={this.state.answerOne} onChange={this.onChangeAnswerOne}/>
				<br/>
				</div>);
			case "single":
			return(<div>
				Answer:   <input type="text" name="answer-1" value={this.state.answerOne} onChange={this.onChangeAnswerOne}/><br/>
				Option 1: <input type="text" name="option-1" value={this.state.optionOne} onChange={this.onChangeOptionOne}/><br/>
				Option 2: <input type="text" name="option-2" value={this.state.optionTwo} onChange={this.onChangeOptionTwo}/><br/>
				Option 3: <input type="text" name="option-3" value={this.state.optionThree} onChange={this.onChangeOptionThree}/><br/>
				</div>);
			case "multiple":
			return(<div>
				Answer 1: <input type="text" name="answer-1" value={this.state.answerOne} onChange={this.onChangeAnswerOne}/><br/>
				Answer 2: <input type="text" name="answer-2" value={this.state.answerTwo} onChange={this.onChangeAnswerTwo}/><br/>
				Option 1: <input type="text" name="option-1" value={this.state.optionOne} onChange={this.onChangeOptionOne}/><br/>
				Option 2: <input type="text" name="option-2" value={this.state.optionTwo} onChange={this.onChangeOptionTwo}/><br/>
				</div>);
			default:
				return(null);
	}
      }
      render(){
		return(
			<div>
				<h4>{this.props.index}.</h4>
				<form id={this.props.index}>
					Question: <input type="text" name="Question" onChange={this.onChangequestion}/><br/>
					Question Type: <select name="questionType" value={this.state.questionType} 
					onChange={this.onChangeType}>
					<option value="single" selected>Single Choice Answer</option>
					<option value="multiple">Multiple Choice Answer</option>
					<option value="fill">Fill in Answer</option>
					</select><br/>
					{this.getAnswerPrompt()}
				</form>
				<br/>
				</div>
			);
      }
}
export default CreateQuestionObject;