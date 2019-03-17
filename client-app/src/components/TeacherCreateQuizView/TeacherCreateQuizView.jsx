import React, { Component } from 'react';
import CreateQuestionObject from '../createQuestionObject/CreateQuestionObject';

class TeacherCreateQuizView extends Component {
	constructor(props){
		super(props);
		this.state = {
			   selectValue: "10"
		};
	}

  	onChange=(e)=>{
		this.setState({
			selectValue:e.target.value
		});
	}

	submitForms =()=>{

	}
    render(){
		return(
			<div>
				Amount of Questions: <select name="questionAmt" value={this.state.selectValue}
                                        onChange={this.onChange}>
                                        <option value="10" >10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                        </select>
				<form id="data">
					Title: <input type="text" name="Title"/><br/>
					Desc: <input type="text" name="Desc"/><br/>
					Tags: <input type="text" name="Tags"/><br/>
				</form><br/>
				{Array.from(Array(parseInt(this.state.selectValue)).keys()).map(e=><CreateQuestionObject index={e+1} />)}
				<input type="submit" className="button" value="Submit" onClick={this.submitForms()}/>
			</div>
			
	);
      }
}

export default TeacherCreateQuizView;