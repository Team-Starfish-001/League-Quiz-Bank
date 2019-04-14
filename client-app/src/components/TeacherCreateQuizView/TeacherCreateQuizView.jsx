import React, { Component } from 'react';
import CreateQuestionObject from '../createQuestionObject/CreateQuestionObject';

class TeacherCreateQuizView extends Component {
	constructor(props){
		super(props);
		var list = []
                for(var i = 1; i < 11; i++){
			list.push({id: i,
                        questionType:"single",
                        question:"",
                        answerOne:"",
                        answerTwo:"",
                        optionOne:"",
                        optionTwo:"",
                        optionThree:""})
		}
		this.state = {
                           questionAmtSelectedValue: 10,
                           form_data: {
                                title: "",
                                desc: "",
                                tags: "",
                                amt: 10,
                                questions: list
                        }
                };
		console.log(this.state)
	}

  	onChange=(e)=>{
		var amt = (parseInt(e.target.value)) ? parseInt(e.target.value) : 10;
		var old_amt = this.state.form_data.amt
		if(amt > 100 || amt < 1){
			amt = 10
		}
		var questions= [];
		var old_list = this.state.form_data.questions
		for(var i = 1; i < amt +1; i++){
			if(i-1 < old_amt){
			     questions.push(old_list[i-1])
			}else{
				questions.push({id: i,
                        			questionType:"single",
                       		 		question:"",
                        	  		answerOne:"",
						answerTwo:"",
                      		   		optionOne:"",
                        	   		optionTwo:"",
                        	   		optionThree:""})
			}
		}
		this.setState({
			questionAmtSelectedValue: amt,
			form_data: {
				amt: amt,
				questions: questions
			}
		});
	}

	handleQuestion=(_state)=>{
		var index = _state.id
		var old_list = this.state.form_data.questions
		var old_obj = old_list[index]
		var amt = this.state.form_data.amt
		old_obj.question = _state.question
		old_obj.questionType = _state.questionType
		old_obj.answerOne = _state.answerOne
		old_obj.answerTwo = _state.answerTwo
		old_obj.optionOne = _state.optionOne
		old_obj.optionTwo = _state.optionTwo
		old_obj.optionThree = _state.optionThree
		this.setState({
			form_data:{
				amt: amt,
				questions: old_list
			}
		})
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