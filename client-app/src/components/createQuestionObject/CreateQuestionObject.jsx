import React, { Component } from 'react';

class CreateQuestionObject extends Component {
      constructor(props){
		super(props);
		this.state = {selectedValue:"single"};
      }
      onChange =(e)=>{
      	this.setState({selectedValue:e.target.value})
      }
      getAnswerPrompt(){
		switch(this.state.selectedValue){
			case "fill":
			return(
				<div>Answer: <input type="text" name="answer-fill"/><br/></div>
				);
			break;
			case "single":
			return(<div>
				Answer: <input type="text" name="answer-single"/><br/>
				Option 1: <input type="text" name="option-single-1"/><br/>
				Option 2: <input type="text" name="option-single-2"/><br/>
				Option 3: <input type="text" name="option-single-3"/><br/>
				</div>);
			break;
			case "multiple":
			return(<div>
				Answer 1: <input type="text" name="answer-multiple-1"/><br/>
				Answer 2: <input type="text" name="answer-multiple-2"/><br/>
				Option 1: <input type="text" name="option-multiple-1"/><br/>
				Option 2: <input type="text" name="option-multiple-2"/><br/>
				</div>);
	}
      }
      render(){
		return(
			<div>
				<h4>{this.props.index}.</h4>
				<form id={this.props.index}>
					Question: <input type="text" name="Question"/><br/>
					Question Type: <select name="questionType" value={this.state.selectValue} 
					onChange={this.onChange}>
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