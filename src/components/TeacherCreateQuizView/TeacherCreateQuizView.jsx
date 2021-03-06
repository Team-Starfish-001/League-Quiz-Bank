import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
            variant='standard'
          />
          <TextField
            id='outlined-name'
            label='Class'
            className={classes.textField}
            margin='normal'
            variant='standard'
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
        <Button color='primary' aria-label='Add' size='small' onClick={this.props.addQuestion}>
          Add Question
        </Button>
        <Button color='primary' aria-label='Del' size='small' onClick={this.props.saveQuiz}>
          Save
        </Button>
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
