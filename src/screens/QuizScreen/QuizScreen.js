import React, { Component } from 'react';




class QuizScreen extends Component {
    render() {
        const {startQuiz} = this.props;
        console.log(startQuiz);
        return (
            <div>
                Give Answers
            </div>
        )
    }
}

export default QuizScreen;