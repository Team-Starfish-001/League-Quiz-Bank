import React, { Component } from 'react';
import CreateQuestionObject from '../createQuestionObject/CreateQuestionObject';

class TeacherCreateQuizView extends Component {
	constructor(props){
		super(props);
		this.state = {
			   questionAmtSelectedValue: 10
		};
	}

  	onChange=(e)=>{
		var amt = (parseInt(e.target.value)) ? parseInt(e.target.value) : 10;
		if(amt > 100 || amt < 1){
			amt = 10
		}
		this.setState({
			questionAmtSelectedValue: amt
		});
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
				{Array.from(Array(this.state.questionAmtSelectedValue).keys()).map((e)=><CreateQuestionObject index={e+1} />)}
				<input type="submit" className="button" value="Submit" onClick={this.submitForms()}/>
			</div>
			
	);
      }
}

export default TeacherCreateQuizView;