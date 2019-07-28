import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

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
const style_css = {  
  "display":"block",
  "width":"20%",
  "padding":"0.375rem 0.75rem",
  "fontSize":"1rem",
  "lineHeight":"1.5",
  "color":"#495057",
  "backgroundColor":"#fff",
  "backgroundClip":"padding-box",
  "border":"1px solid #ced4da",
  "borderRadius":"0.25rem",
  "transition":"border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out"
};

class CreateQuestionObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.index - 1,
      questionType: 'single',
      question: '',
      answerOne: '',
      answerTwo: '',
      optionOne: '',
      optionTwo: '',
      optionThree: '',
    };
  }
  QuestionChange() {
    this.props.handleQuestion(this.state);
  }
  onChangeType = e => {
    this.setState(
      {
        questionType: e.target.value,
        answerOne: '',
        answerTwo: '',
        optionOne: '',
        optionTwo: '',
        optionThree: '',
      },
      this.QuestionChange
    );
  };
  onChangequestion = e => {
    this.setState({ question: e.target.value }, this.QuestionChange);
  };
  onChangeAnswerOne = e => {
    this.setState({ answerOne: e.target.value }, this.QuestionChange);
  };
  onChangeAnswerTwo = e => {
    this.setState({ answerTwo: e.target.value }, this.QuestionChange);
  };
  onChangeOptionOne = e => {
    this.setState({ optionOne: e.target.value }, this.QuestionChange);
  };
  onChangeOptionTwo = e => {
    this.setState({ optionTwo: e.target.value }, this.QuestionChange);
  };
  onChangeOptionThree = e => {
    this.setState({ optionThree: e.target.value }, this.QuestionChange);
  };
  getAnswerPrompt() {
    const { classes } = this.props;
    switch (this.state.questionType) {
    case 'fill':
      return (
        <div>
          <TextField
            id='outlined-name'
            label='Answer'
            className={classes.textField}
            margin='normal'
            variant='outlined'
            name='answer-1'
            value={this.state.answerOne}
            onChange={this.onChangeAnswerOne}
          />
          <br />
        </div>
      );
    case 'single':
      return (
        <div>
          <TextField
            id='outlined-name'
            label='Answer'
            className={classes.textField}
            margin='normal'
            variant='outlined'
            name='answer-1'
            value={this.state.answerOne}
          />
          <br />
          <TextField
            id='outlined-name'
            label='Option 1'
            className={classes.textField}
            margin='normal'
            variant='outlined'
            name='option-1'
            value={this.state.optionOne}
          />
          <br />
          <TextField
            id='outlined-name'
            label='Option 2'
            className={classes.textField}
            margin='normal'
            variant='outlined'
            name='option-2'
            value={this.state.optionTwo}
          />
          <br />
          <TextField
            id='outlined-name'
            label='Option 3'
            className={classes.textField}
            margin='normal'
            variant='outlined'
            name='option-3'
            value={this.state.optionThree}
          />
          <br />
        </div>
      );
    case 'multiple':
      return (
        <div>
          <TextField
            id='outlined-name'
            label='Answer 1'
            className={classes.textField}
            margin='normal'
            variant='outlined'
            name='answer-1'
            value={this.state.answerOne}
            onChange={this.onChangeAnswerOne}
          />
          <br />
          <TextField
            id='outlined-name'
            label='Answer 2'
            className={classes.textField}
            margin='normal'
            variant='outlined'
            name='answer-2'
            value={this.state.answerTwo}
            onChange={this.onChangeAnswerTwo}
          />
          <br />
          <TextField
            id='outlined-name'
            label='Option 1'
            className={classes.textField}
            margin='normal'
            variant='outlined'
            name='option-1'
            value={this.state.optionOne}
            onChange={this.onChangeOptionOne}
          />
          <br />
          <TextField
            id='outlined-name'
            label='Option 2'
            className={classes.textField}
            margin='normal'
            variant='outlined'
            name='option-2'
            value={this.state.optionTwo}
            onChange={this.onChangeOptionTwo}
          />
          <br />
        </div>
      );
    default:
      return null;
    }
  }
  render() {
    return (
      <div>
        <h4>{this.props.index}.</h4>
        <form id={this.props.index}>
          Question: <input type='text' style={style_css} name='Question' onChange={this.onChangequestion} />
          <br />
          Question Type:{' '}
          <select name='questionType' value={this.state.questionType} onChange={this.onChangeType}>
            <option value='single'>Single Choice Answer</option>
            <option value='multiple'>Multiple Choice Answer</option>
            <option value='fill'>Fill in Answer</option>
          </select>
          <br />
          {this.getAnswerPrompt()}
        </form>
        <br />
      </div>
    );
  }
}
CreateQuestionObject.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateQuestionObject);
