import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class CreateQuestionObject extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.index - 1,
			questionType: "single",
			question: "",
			answerOne: "",
			answerTwo: "",
			optionOne: "",
			optionTwo: "",
			optionThree: ""
		};
	}
	QuestionChange() {
		this.props.handleQuestion(this.state);
	}
	onChangeType = (e) => {
		this.setState({
			questionType: e.target.value,
			answerOne: "",
			answerTwo: "",
			optionOne: "",
			optionTwo: "",
			optionThree: ""
		}, this.QuestionChange)
	}
	onChangequestion = (e) => {
		this.setState({ question: e.target.value }, this.QuestionChange)
	}
	onChangeAnswerOne = (e) => {
		this.setState({ answerOne: e.target.value }, this.QuestionChange)
	}
	onChangeAnswerTwo = (e) => {
		this.setState({ answerTwo: e.target.value }, this.QuestionChange)
	}
	onChangeOptionOne = (e) => {
		this.setState({ optionOne: e.target.value }, this.QuestionChange)
	}
	onChangeOptionTwo = (e) => {
		this.setState({ optionTwo: e.target.value }, this.QuestionChange)
	}
	onChangeOptionThree = (e) => {
		this.setState({ optionThree: e.target.value }, this.QuestionChange)
	}
	getAnswerPrompt() {
		switch (this.state.questionType) {
			case "fill":
				return (<div>
					<TextField name="answer-1" label="Answer" margin="normal" variant="outlined" value={this.state.answerOne} onChange={this.onChangeAnswerOne} />
					<br />
				</div>);
			case "single":
				return (<div>
					<TextField name="answer-1" label="Answer" margin="normal" variant="outlined" value={this.state.answerOne} onChange={this.onChangeAnswerOne} />
					<br />
					<TextField name="option-1" label="Option 1" margin="normal" variant="outlined" value={this.state.optionOne} onChange={this.onChangeOptionOne} />
					<br />
					<TextField name="option-2" label="Option 2" margin="normal" variant="outlined" value={this.state.optionTwo} onChange={this.onChangeOptionTwo} />
					<br />
					<TextField name="option-3" label="Option 3" margin="normal" variant="outlined" value={this.state.optionThree} onChange={this.onChangeOptionThree} />
				</div>);
			case "multiple":
				return (<div>
					<TextField name="answer-1" label="Answer 1" margin="normal" variant="outlined" value={this.state.answerOne} onChange={this.onChangeAnswerOne} />
					<br />
					<TextField name="answer-2" label="Answer 2" margin="normal" variant="outlined" value={this.state.answerTwo} onChange={this.onChangeAnswerTwo} />
					<br />
					<TextField name="option-1" label="Option 1" margin="normal" variant="outlined" value={this.state.optionOne} onChange={this.onChangeOptionOne} />
					<br />
					<TextField name="option-2" label="Option 2" margin="normal" variant="outlined" value={this.state.optionTwo} onChange={this.onChangeOptionTwo} />
					<br />
				</div>);
			default:
				return (null);
		}
	}
	render() {
		return (
			<div>
				<h4>{this.props.index}.</h4>
				<form id={this.props.index}>
					<TextField name="Question" label="Question" margin="normal" variant="standard" inputProps={{ style: { fontSize: 20 } }} onChange={this.onChangequestion} />
					<br />
					<Select
						value={this.state.questionType}
						onChange={this.onChangeType}
						inputProps={{
							name: 'age',
							id: 'age-simple',
						}}
					></Select>
					Question Type: <select name="questionType" value={this.state.questionType}
						onChange={this.onChangeType}>
						<option value="single" >Single Choice Answer</option>
						<option value="multiple">Multiple Choice Answer</option>
						<option value="fill">Fill in Answer</option>
					</select><br />
					{this.getAnswerPrompt()}
				</form>
				<br />
			</div>
		);
	}
}
export default CreateQuestionObject;