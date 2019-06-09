import React from 'react';

const resData = [
  {
    correct: [1],
    freeTextCorrect: null,
    type: 'single select',
    options: ['blah', 'blah', 'blah'],
    answers: [1],
    freeTextAnswer: null
  },
  {
    correct: [2, 3],
    freeTextCorrect: null,
    type: 'multi select',
    options: ['blah', 'blah', 'blah'],
    answers: [1, 2],
    freeTextAnswer: null
  },
  {
    correct: [],
    freeTextCorrect: 'answer',
    type: 'free text',
    options: [],
    answers: [],
    freeTextAnswer: 'answer'
  }
];

class QuizResultView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correct: 0,
      total: 0,
      quiz: resData
    };
    this.evalTest();
  }
  evalTest() {
    for (var x in this.state.quiz) {
      var i = this.state.quiz[x];
      this.setState({
        total: this.state.total++
      });
      var correct = false;
      console.log(i);
      switch (i.type) {
        case 'single select':
          if (i.correct[0] === i.answers[0]) correct = true;
          break;
        case 'multi select':
          if (i.correct === i.answers) correct = true;
          break;
        case 'free text':
          if (i.freeTextAnswer === i.freeTextCorrect) correct = true;
          break;
        default:
          correct = false;
      }
      if (correct)
        this.setState({
          correct: this.state.correct++
        });
    }
  }

  textColor(i) {
    if (i > 90) {
      return { color: '#0f0' };
    } else if (i > 80) {
      return { color: '#fd0' };
    } else if (i > 70) {
      return { color: '#f80' };
    } else {
      return { color: '#f00' };
    }
  }

  render() {
    var percentage = Math.round((this.state.correct / this.state.total) * 100);
    return (
      <div>
        <center>
          {this.state.correct}
          <br />
          ------
          <br />
          {this.state.total}
          <br />
          <h1 style={this.textColor(percentage)}>{percentage}%</h1>
        </center>
      </div>
    );
  }
}

export default QuizResultView;
