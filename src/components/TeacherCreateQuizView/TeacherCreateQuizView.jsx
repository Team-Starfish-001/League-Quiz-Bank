import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RmIcon from '@material-ui/icons/Remove';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CreateQuestionObject from '../createQuestionObject/CreateQuestionObject';
import Header from '../Header/Header.jsx';
//testing status

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
class TeacherCreateQuizView extends Component {
  constructor(props) {
    super(props);
    var list = [];
    for (var i = 1; i < 11; i++) {
      list.push({
        id: i,
        questionType: 'single',
        question: '',
        answerOne: '',
        answerTwo: '',
        optionOne: '',
        optionTwo: '',
        optionThree: '',
      });
    }
    this.state = {
      questionAmtSelectedValue: 10,
      form_data: {
        title: '',
        desc: '',
        tags: '',
        amt: 10,
        questions: list,
      },
    };
  }
  handleQuestionAmt = amt => {
    var old_amt = this.state.form_data.amt;
    if (amt > 100) {
      amt = 100;
    } else if (amt < 2) {
      amt = 1;
    }
    var questions = [];
    var old_list = this.state.form_data.questions;
    for (var i = 1; i < amt + 1; i++) {
      if (i - 1 < old_amt) {
        questions.push(old_list[i - 1]);
      } else {
        questions.push({
          id: i,
          questionType: 'single',
          question: '',
          answerOne: '',
          answerTwo: '',
          optionOne: '',
          optionTwo: '',
          optionThree: '',
        });
      }
    }
    this.setState({
      questionAmtSelectedValue: amt,
      form_data: {
        amt: amt,
        questions: questions,
      },
    });
  };
  addQuestion = e => {
    this.handleQuestionAmt(this.state.form_data.amt + 1);
  };
  delQuestion = e => {
    this.handleQuestionAmt(this.state.form_data.amt - 1);
  };

  handleQuestion = _state => {
    var index = _state.id;
    var old_list = this.state.form_data.questions;
    var old_obj = old_list[index];
    var amt = this.state.form_data.amt;
    old_obj.question = _state.question;
    old_obj.questionType = _state.questionType;
    old_obj.answerOne = _state.answerOne;
    old_obj.answerTwo = _state.answerTwo;
    old_obj.optionOne = _state.optionOne;
    old_obj.optionTwo = _state.optionTwo;
    old_obj.optionThree = _state.optionThree;
    this.setState({
      form_data: {
        amt: amt,
        questions: old_list,
      },
    });
  };

  submitForms = () => {
    console.log(this.state);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <form id='data'>
          <TextField
            id='title'
            label='Title'
            className={classes.textField}
            margin='normal'
            variant='standard'
            inputProps={{
              style: { fontSize: 30 },
            }}
          />
          <br />
          <TextField
            id='outlined-name'
            label='Description'
            className={classes.textField}
            margin='normal'
            variant='outlined'
          />
          <TextField
            id='outlined-name'
            label='Class'
            className={classes.textField}
            margin='normal'
            variant='outlined'
          />
          <br />
          <TextField
            name='question_amt'
            label='Amount of Questions'
            className={classes.textField}
            margin='normal'
            variant='outlined'
            onChange={this.onChange}
          />
        </form>
        <br />
        <Card className={classes.card}>
          <CardContent>
            {Array.from(Array(this.state.questionAmtSelectedValue).keys()).map(
              e => (
                <CreateQuestionObject
                  index={e + 1}
                  handleQuestion={this.handleQuestion}
                />
              )
            )}
          </CardContent>
        </Card>
        <Fab color='primary' aria-label='Add' onClick={this.addQuestion}>
          <AddIcon />
        </Fab>
        <Fab color='primary' aria-label='Rm' onClick={this.delQuestion}>
          <RmIcon />
        </Fab>
        <input
          type='submit'
          className='button'
          value='Submit'
          onClick={this.submitForms()}
        />
      </div>
    );
  }
}

TeacherCreateQuizView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeacherCreateQuizView);
