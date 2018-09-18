import React, { Component } from 'react';
import moment from 'moment';
import Timer from './TImer';

let time1;
let quizTime;
let allQuestions;
class QuizScreen extends Component {
    constructor() {
        super()
        this.state = {
            quizNo: 0,
            givinAnswer: '',
            allAnswers: [],
            quizCode: '',
            Quiz: false,
            time: ''
        }
        this.getValue = this.getValue.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
        this.start = this.start.bind(this);
        this.backup = this.backup.bind(this);
    }


    getValue(e) {
        const givinAnswer = e.target.value;
        this.setState({ givinAnswer });
    }

    submitAnswer(e) {
        e.preventDefault();
        const { startQuiz } = this.props;
        const { quizNo, givinAnswer, allAnswers } = this.state;
        const correctAnswer = startQuiz.questions[quizNo].correctAnswer;
        const answer = {
            correctAnswer,
            givinAnswer,
            quizNo
        }
        allAnswers.push(answer);
        allQuestions = allAnswers

        if (quizNo + 1 < startQuiz.questions.length) {
            this.setState({ allAnswers, givinAnswer: '', quizNo: quizNo + 1 })
        } else {
            console.log(quizNo);
            console.log(allAnswers);
            this.setState({ allAnswers, givinAnswer: '' })
            this.props.showMarks(allAnswers);
        }

    }
    form(e) {
        e.preverntDefault();
    }
    backup(){
        this.props.showMarks(allQuestions);
    }
    renderQuiz() {
        const { startQuiz } = this.props;
        const { quizNo } = this.state;
        const quizQuestion = startQuiz.questions[quizNo];
        return (
            <div>
                <Timer timerOut={this.backup} />
                <div>
                    {quizQuestion.question}
                </div>
                <form onSubmit={this.submitAnswer}>
                    <ul>
                        {quizQuestion.options.map((option, index) => {
                            return (
                                <li key={option}>
                                    <div className="radio">
                                        <label >
                                            <input required onClick={this.getValue} value={index} name={quizQuestion.question} type="radio" />
                                            {option}
                                        </label>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <div>
                        <button>
                            Next
                    </button>
                    </div>
                </form>
            </div>
        )
    }
    start(e) {
        e.preventDefault();
        const { quizCode } = this.state;
        if (quizCode === "123456") {
            this.setState({ Quiz: true })
            time1 = Date.now();
            console.log(time1);
            quizTime= time1 + 200000;
            console.log(quizTime);
            
            
        }

       
    }

    passowrdField() {
        return (
            <div>
                <form onSubmit={this.start.bind(this)}>
                    <input
                        value={this.state.quizCode}
                        onChange={(e) => this.setState({ quizCode: e.target.value })}
                        placeholder="Please Enter The Quiz Password And Hit Enter"
                        style={{ width: "40%" }}
                    />
                </form>
            </div>
        )
    }

    render() {
        const { startQuiz } = this.props;
        const { quizNo, Quiz } = this.state;
        const quizQuestion = startQuiz.questions[quizNo];
        return (
            <div>
                <div>
                   
                </div>
                {Quiz ?
                    this.renderQuiz()
                    : this.passowrdField()
                }
            </div>
        )
    }
}

export default QuizScreen;