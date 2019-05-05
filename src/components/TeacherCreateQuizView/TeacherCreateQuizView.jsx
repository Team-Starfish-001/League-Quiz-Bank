import React, { Component } from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import CreateQuestionObject from '../createQuestionObject/CreateQuestionObject';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});
=======
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CreateQuestionObject from '../createQuestionObject/CreateQuestionObject';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};
>>>>>>> 3ff427bd3251a16a30847e89d3b392d06ed6791b

class TeacherCreateQuizView extends Component {
	constructor(props){
		const { classes } = props;

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
		    console.log(this.state)
	}

    render(){
	const { classes } = this.props;
		return(
			<div>
				<h1>Create Quiz</h1>
<<<<<<< HEAD
				<br/>
=======
>>>>>>> 3ff427bd3251a16a30847e89d3b392d06ed6791b
				Amount of Questions: <input type="text" name="question_amt" onChange={this.onChange} /><br/>
				<form id="data">
					<TextField
						id="outlined-name"
						label="Title"				
						className={classes.textField}
          					margin="normal"
          					variant="outlined"
        					/>
					<TextField
                                                id="outlined-name"
                                                label="Description"
                                                className={classes.textField}
                                                margin="normal"
                                                variant="outlined"
                                                />
					<TextField
                                                id="outlined-name"
                                                label="Class"
                                                className={classes.textField}
                                                margin="normal"
                                                variant="outlined"
                                                />
				</form><br/>
				<Card className={classes.card}>
					<CardContent>
						{Array.from(Array(this.state.questionAmtSelectedValue).keys()).map((e)=><CreateQuestionObject index={e+1} handleQuestion={this.handleQuestion} />)}
					</CardContent>
				</Card>
				<input type="submit" className="button" value="Submit" onClick={this.submitForms()}/>

			</div>

	);
      }
}

<<<<<<< HEAD
TeacherCreateQuizView.propTypes = {
  classes: PropTypes.object.isRequired,
};

=======
>>>>>>> 3ff427bd3251a16a30847e89d3b392d06ed6791b
export default withStyles(styles)(TeacherCreateQuizView);
