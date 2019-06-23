import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    marginTop: 5,
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  }
};

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
      quiz: resData,
      list: []
    };
    this.evalTest();
    this.generateTableData();
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

  createData(index, usr_answer, answer) {
    return { index: index, usr_answer: usr_answer, answer: answer };
  }

  generateTableData() {
    var x = 0;
    for (var z in this.state.quiz) {
      x++;
      var i = this.state.quiz[z];
      if (i.type === 'free text') {
        var usr_answer = i.freeTextAnswer;
        var answer = i.freeTextCorrect;
      } else if (i.type === 'single select') {
        console.log(i.answer);
        var usr_answer = 'A';
        var answer = i.options[i.correct];
      } else {
        var usr_answer = 'a';
        var answer = 'a';
      }

      var list = this.state.list;
      this.setState({
        list: list.push(this.createData(x, usr_answer, answer))
      });
    }
  }

  render() {
    const classes = styles;
    var percentage = Math.round((this.state.correct / this.state.total) * 100);
    return (
      <div>
        <center>
          <h1 style={this.textColor(percentage)}>{percentage}%</h1>
        </center>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Questions #</TableCell>
                <TableCell align="left">Answer</TableCell>
                <TableCell align="left">Correct</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.list.map(row => (
                <TableRow key={row.name}>
                  <TableCell align="left">{row.index}</TableCell>
                  <TableCell align="left">{row.usr_answer}</TableCell>
                  <TableCell align="left">{row.answer}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(QuizResultView);
