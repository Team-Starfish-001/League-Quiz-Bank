import React, { Component } from 'react';
import CreateQuestionObject from '../createQuestionObject/CreateQuestionObject';

class TeacherCreateQuizView extends Component {
	constructor(props){
		super(props);
		this.displayData = [];

    
	}  
	appendData =(e)=> {
		this.displayData.push(<div>hi</div>);
		/*this.setState({
			showdata : this.displayData,
			index: this.state.index +1
		});*/
		
	}
	submitForms =()=>{

    }
    render(){
		return(
			<div>
				<form id="0">
					Title: <input type="text" name="Title"/><br/>
					Desc: <input type="text" name="Desc"/><br/>
					Tags: <input type="text" name="Tags"/><br/>
				</form><br/>
				{this.displayData.map((e)=>{e})}
				<input type="submit" className="button" value="Add" onClick={e=>this.appendData()}/>
				<input type="submit" className="button" value="Submit" onClick={this.submitForms()}/>
			</div>
			
	);
      }
}

export default TeacherCreateQuizView;