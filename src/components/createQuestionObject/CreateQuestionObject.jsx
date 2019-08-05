import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
// Lets use this! ---> import TextField from '@material-ui/core/TextField';
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
  display: 'block',
  width: '20%',
  padding: '0.375rem 0.75rem',
  fontSize: '1rem',
  lineHeight: '1.5',
  color: '#495057',
  backgroundColor: '#fff',
  backgroundClip: 'padding-box',
  border: '1px solid #ced4da',
  borderRadius: '0.25rem',
  transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
};

class CreateQuestionObject extends Component {
  render() {
    console.log(this.props);
    const questionIndex = this.props.questionIndex;
    return (
      <div>
        <h4>{this.props.questionIndex + 1}.</h4>
        Question:{' '}
        <input
          type='button'
          className='button'
          value='delete Question'
          onClick={() => this.props.removeQuestion(questionIndex)}
        />
        <input
          type='text'
          style={style_css}
          name='Question'
          value={this.props.prompt}
          onChange={event => this.props.updateQuestionPrompt(event.target.value, questionIndex)}
        />
        <br />
        {this.props.options.map((option, optionIndex) => {
          // we need to add the checkbox here too
          return (
            <React.Fragment>
              <input
                type='text'
                style={style_css}
                value={option.text}
                onChange={event =>
                  this.props.updateOptionText(event.target.value, optionIndex, questionIndex)
                }
              />
              <input
                type='button'
                className='button'
                value='Delete Option'
                onClick={() => this.props.removeQuestionOption(optionIndex, questionIndex)}
              />
            </React.Fragment>
          );
        })}
        <br />
        <input
          type='button'
          className='button'
          value='Add Option'
          onClick={() => this.props.addOption(questionIndex)}
        />
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
