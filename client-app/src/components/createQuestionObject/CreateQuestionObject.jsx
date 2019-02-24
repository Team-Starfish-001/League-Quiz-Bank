import React, { Component } from 'react';

class CreateQuestionObject extends Component {
      constructor(props){
	super(props);
	this.state = {selectedValue:"single"};
      }
      handleChange(e){
      let a = e.target.value;
      this.setState({
		"selectedValue":a
		});
      }
      getAnswerPrompt(){
	switch(this.state.selectedValue){
		case "fill":
		     return(<p>sadasd</p>);
		break;
		case "single":
		     return(<p>singesfsfsdfds</p>);
		break;
		case "multiple":
		     return(<p>yeyeyeyeeaf</p>);
	}
      }
      render(){
	return(
		<div>
			<form id="1">
		      	      Question: <input type="text" name="Question"/><br/>
			      Question Type: <select name="questionType" value={this.state.selectValue} 
        		      onChange={this.handleChange}>
				<option value="single" selected>Single Choice Answer</option>
				<option value="multiple">Multiple Choice Answer</option>
				<option value="fill">Fill in Answer</option>
			      </select><br/>
			      {this.getAnswerPrompt()}
			</form>
			</div>
		);
      }
}
export default CreateQuestionObject;