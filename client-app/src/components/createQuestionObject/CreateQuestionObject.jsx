import React, { Component } from 'react';

class CreateQuestionObject extends Component {
      render(){
	return(
		<div>
			<form id="1">
		      	      Question: <input type="text" name="Question"/><br/>
			      Question Type: <select name="questionType">
				<option value="single" selected>Single Choice Answer</option>
				<option value="multiple">Multiple Choice Answer</option>
				<option value="fill">Fill in Answer</option>
			      </select><br/>
			      
			</form>
			</div>
		);
      }
}
export default CreateQuestionObject;