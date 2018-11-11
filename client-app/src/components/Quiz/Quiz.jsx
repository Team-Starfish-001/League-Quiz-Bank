import React, { Component } from 'react';
import './Quiz.css';

class Quiz extends Component {
    render() {
        return (
            <div className="QuizCard">{this.props.data.QuizName}</div>
        );
    }
}

export default Quiz;
