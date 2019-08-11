import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CreateQuestionObject from '../createQuestionObject/CreateQuestionObject';
import Header from '../Header/Header.jsx';
import {
  setQuizTitle,
  setQuizDescription,
  setQuizLevel,
  setQuizClass,
  addQuestion,
  updateQuestion,
  removeQuestion,
  saveQuiz,
  addOption,
  updateOptionText,
  updateQuestionPrompt,
  removeQuestionOption,
  toggleQuestionOptionAsAnswer,
} from '../../actions/quizActions';

// testing status

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
            value={this.props.title}
            onChange={event => this.props.setQuizTitle(event.target.value)}
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
            {this.props.questions.map((question, questionIndex) => (
              <CreateQuestionObject
                key={`question-${questionIndex}`}
                questionIndex={questionIndex}
                prompt={question.prompt}
                options={question.options}
                removeQuestion={this.props.removeQuestion}
                addOption={this.props.addOption}
                updateOptionText={this.props.updateOptionText}
                updateQuestionPrompt={this.props.updateQuestionPrompt}
                removeQuestionOption={this.props.removeQuestionOption}
                toggleQuestionOptionAsAnswer={this.props.toggleQuestionOptionAsAnswer}
              />
            ))}
          </CardContent>
        </Card>
        <Fab color='primary' aria-label='Add' size='small' onClick={this.props.addQuestion}>
          <AddIcon />
        </Fab>
        <input type='button' className='button' value='Save Quiz' onClick={this.props.saveQuiz} />
      </div>
    );
  }
}

TeacherCreateQuizView.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quizClass: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      prompt: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          isAnswer: PropTypes.bool.isRequired,
        })
      ),
    })
  ),
  setQuizTitle: PropTypes.func.isRequired,
  setQuizDescription: PropTypes.func.isRequired,
  setQuizLevel: PropTypes.func.isRequired,
  setQuizClass: PropTypes.func.isRequired,
  addQuestion: PropTypes.func.isRequired,
  updateQuestion: PropTypes.func.isRequired,
  removeQuestion: PropTypes.func.isRequired,
  saveQuiz: PropTypes.func.isRequired,
  addOption: PropTypes.func.isRequired,
  updateOptionText: PropTypes.func.isRequired,
  updateQuestionPrompt: PropTypes.func.isRequired,
  removeQuestionOption: PropTypes.func.isRequired,
  toggleQuestionOptionAsAnswer: PropTypes.func.isRequired,
};

const StyledComponent = withStyles(styles)(TeacherCreateQuizView);

const mapStateToProps = ({ quiz }) => ({
  title: quiz.title,
  description: quiz.description,
  quizClass: quiz.quizClass,
  level: quiz.level,
  questions: quiz.questions,
});

export default connect(
  mapStateToProps,
  {
    setQuizTitle,
    setQuizDescription,
    setQuizLevel,
    setQuizClass,
    addQuestion,
    updateQuestion,
    removeQuestion,
    saveQuiz,
    addOption,
    updateOptionText,
    updateQuestionPrompt,
    removeQuestionOption,
    toggleQuestionOptionAsAnswer,
  }
)(StyledComponent);
