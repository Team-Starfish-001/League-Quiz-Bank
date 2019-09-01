import React from 'react';

class QuestionObject extends React.Component {
  createForm() {
    let option = this.props.data.type;
    switch (option) {
    case 'single':
      return (
        <form id={this.props.data.index}>
          {this.props.data.choices.map(e => (
            <div>
              <input
                type='radio'
                value={e.answer}
                name={this.props.data.index}
              />{' '}
              {e.answer}
              <br />
            </div>
          ))}
        </form>
      );
    case 'multiple':
      return (
        <form id={this.props.data.index}>
          {this.props.data.choices.map(e => (
            <div>
              <input
                type='checkbox'
                value={e.answer}
                name={this.props.data.index}
              />{' '}
              {e.answer}
              <br />
            </div>
          ))}
        </form>
      );
    case 'fill':
      return (
        <form id={this.props.data.index}>
          <textarea name='input' cols='40' rows='5' />
        </form>
      );
    default:
      return (
        <form id={this.props.data.index}>
          <textarea name='input' cols='40' rows='5' />
        </form>
      );
    }
  }
  render() {
    return (
      <div>
        <h3>
          #{this.props.data.index}: {this.props.data.prompt}
        </h3>
        <br />
        {this.createForm()}
        <br />
      </div>
    );
  }
}

export default QuestionObject;
