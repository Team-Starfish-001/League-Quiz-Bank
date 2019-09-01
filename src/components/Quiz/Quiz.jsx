import React, { Component } from 'react';
import './Quiz.css';

class Quiz extends Component {
  render() {
    return (
      <div className='col-1 row-1'>{this.props.data.QuizName}
        <img src={this.props.data.QuizImg}/>
        <p>Created by {this.props.data.Teacher}</p>
        <p>Class {this.props.data.ClassName}</p>
        <p>{this.props.data.QuizDate}</p>
      </div>
    );
  }
}

export default Quiz;
