import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DelIcon from '@material-ui/icons/Delete';
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
    const questionIndex = this.props.questionIndex;
    return (
      <div>
        <h4>{this.props.questionIndex + 1}.</h4>
        Question:{' '}
        <Fab color='primary' aria-label='Del' size='small' onClick={() => this.props.removeQuestion(questionIndex)}>
          <DelIcon />
        </Fab>
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
              <Fab color='primary' aria-label='Del' size='small' onClick={() => this.props.removeQuestionOption(optionIndex, questionIndex)}>
                <DelIcon />
              </Fab>
            </React.Fragment>
          );
        })}
        <Fab color='primary' aria-label='Add' size='small' onClick={() => this.props.addOption(questionIndex)}>
          <AddIcon />
        </Fab>
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
