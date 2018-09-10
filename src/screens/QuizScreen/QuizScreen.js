import React, { Component } from 'react';




class QuizScreen extends Component {
    constructor() {
        super()
        this.state = {
            quizNo: 0,
            givinAnswer: '',
            allAnswers: []
        }
        this.getValue = this.getValue.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
    }


    getValue(e) {
        const givinAnswer = e.target.value;
        this.setState({ givinAnswer });
    }

    submitAnswer() {
        const { startQuiz } = this.props;
        const { quizNo, givinAnswer, allAnswers } = this.state;
        const correctAnswer = startQuiz.questions[quizNo].correctAnswer;
        const answer = {
            correctAnswer,
            givinAnswer,
            quizNo
        }
        allAnswers.push(answer);

        if (quizNo + 1 < startQuiz.questions.length) {
            this.setState({ allAnswers, givinAnswer: '', quizNo: quizNo + 1 })
        } else {
            console.log(quizNo);
            console.log(allAnswers);
            this.setState({ allAnswers, givinAnswer: '' })
            this.props.showMarks(allAnswers);
        }

    }

    render() {
        const { startQuiz } = this.props;
        const { quizNo } = this.state;
        const quizQuestion = startQuiz.questions[quizNo];
        return (
            <div>
                <div>
                    {quizQuestion.question}
                </div>
                <ul>
                    {quizQuestion.options.map((option, index) => {
                        return (
                            <li key={option}>
                                <div className="radio">
                                    <label >
                                        <input onClick={this.getValue} value={index} name={quizQuestion.question} type="radio" />
                                        {option}
                                    </label>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <button onClick={this.submitAnswer}>
                        Next
                    </button>
                </div>
            </div>
        )
    }
}

export default QuizScreen;