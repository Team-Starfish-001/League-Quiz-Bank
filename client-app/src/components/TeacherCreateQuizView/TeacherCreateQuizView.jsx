import React, { Component } from 'react';
import CreateQuestionObject from '../createQuestionObject/CreateQuestionObject';

class TeacherCreateQuizView extends Component {
      submitForms(){

      }
      render(){
	return(
		<div>
			<form id="0">
				Title: <input type="text" name="Title"/><br/>
				Desc: <input type="text" name="Desc"/><br/>
				Tags: <input type="text" name="Tags"/><br/>
			</form><br/>
			<CreateQuestionObject/>
			<input type="button" value="Submit" onclick={this.submitForms()}/>
		</div>
	);
      }
}

export default TeacherCreateQuizView;