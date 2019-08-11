import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DelIcon from '@material-ui/icons/Delete';
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
        <Fab color='primary' aria-label='Del' size='small' onClick={() => this.props.removeQuestion(questionIndex)}>
          <DelIcon />
        </Fab>
        {this.props.options.map((option, optionIndex) => {
          // we need to add the checkbox here too
          return (
            <React.Fragment>
              <br/>
              <TextField
                id='outlined-name'
                label={"Option: " + optionIndex}
                margin='normal'
                variant='outlined'
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
