import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { relative } from 'path';

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
const buttonStyle = {
  position:relative,
  height: -200,
  top : 25,
  left : 20,
};
const labelStyle = {
  position: 'relative',
  transform: 'translateY(50%)',
};

class CreateQuestionObject extends Component {
  render() {
    const questionIndex = this.props.questionIndex;
    return (
      <div>
        <h4>{this.props.questionIndex + 1}.</h4>
        <TextField
          id='outlined-name'
          label='Question'
          margin='normal'
          variant='outlined'
          value={this.props.prompt}
          onChange={event => this.props.updateQuestionPrompt(event.target.value, questionIndex)}
        />
        <Button
          color='primary'
          aria-label='Del'
          size='small'
          style = {buttonStyle}
          onClick={() => this.props.removeQuestion(questionIndex)}
        >
          Delete Question
        </Button>
        {this.props.options.map((option, optionIndex) => {
          // we need to add the checkbox here too
          return (
            <React.Fragment>
              <br />
              <TextField
                id='outlined-name'
                label={'Option: ' + (optionIndex + 1)}
                margin='normal'
                variant='outlined'

                value={option.text}
                onChange={event =>
                  this.props.updateOptionText(event.target.value, optionIndex, questionIndex)
                }
              />{' '}
              <FormControlLabel
                labelPlacement = 'start'
                color='primary'
                style = {labelStyle}
                control={
                  <Checkbox
                    checked={option.isAnswer}
                    onClick={() =>
                      this.props.toggleQuestionOptionAsAnswer(optionIndex, questionIndex)
                    }
                    color='primary'
                    value={option.isAnswer}
                    inputProps={{
                      'aria-label': 'primary checkbox',
                    }}
                  />
                  
                }
                label={<Typography style={{color:'#3f51b5'}}>IS ANSWER:</Typography>}
              />
              <Button
                color='primary'
                aria-label='Del'
                size='small'
                style = {buttonStyle}
                onClick={() => this.props.removeQuestionOption(optionIndex, questionIndex)}
              >
                Delete Option
              </Button>
            </React.Fragment>
          );
        })}{' '}
        <Button
          color='primary'
          aria-label='Add'
          size='small'
          style = {buttonStyle}
          onClick={() => this.props.addOption(questionIndex)}
        >
          Add Option
        </Button>
      </div>
    );
  }
}
CreateQuestionObject.propTypes = {
  classes: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
  prompt: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      isAnswer: PropTypes.bool.isRequired,
    })
  ),
  removeQuestion: PropTypes.func.isRequired,
  addOption: PropTypes.func.isRequired,
  updateOptionText: PropTypes.func.isRequired,
  updateQuestionPrompt: PropTypes.func.isRequired,
  removeQuestionOption: PropTypes.func.isRequired,
  toggleQuestionOptionAsAnswer: PropTypes.func.isRequired,
};

export default withStyles(styles)(CreateQuestionObject);
