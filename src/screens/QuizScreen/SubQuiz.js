import React, { Component } from 'react';
import QuizScreen from './QuizScreen';


class SubQuiz extends Component {
    constructor() {
        super()
        this.state = {
            startQuiz: '',
            currentIndex: '',
            subQuiz: [],
            allUsers: JSON.parse(localStorage.getItem("userList"))
        }
        this.startQuiz = this.startQuiz.bind(this);
        this.showMarks = this.showMarks.bind(this);
        this.totalMarks = this.totalMarks.bind(this);
    }

    componentWillMount() {
        this.setState({ subQuiz: this.props.subQuiz })
        console.log(this.props.subQuiz);
    }

    startQuiz(index) {
        const { subQuiz } = this.props;
        const startQuiz = subQuiz.Quiz[index]
        this.setState({ startQuiz, currentIndex: index });
    }
    showMarks(allAnswer) {
        console.log(allAnswer)
        const { subQuiz, currentIndex } = this.state;
        subQuiz.Quiz[currentIndex] = allAnswer
        console.log(subQuiz.Quiz);
        this.setState({ startQuiz: '', subQuiz })
    }

    totalMarks(index) {
        const { subQuiz, allUsers } = this.state;
        const { quizIndex, user, userNumber } = this.props;
        console.log();
        let marks = 0, totalMarks = 0;
        console.log(subQuiz);
        subQuiz.Quiz[index].map(question => {
            if (question.correctAnswer == question.givinAnswer) {
                marks += 10;
            }
            totalMarks += 10
        })
        allUsers[userNumber].QuizData[quizIndex].Quiz[index] = subQuiz.Quiz[index]
        localStorage.setItem('userList',JSON.stringify(allUsers))
        console.log(
            allUsers
        );
        return (
            <div>
                Total Marks : {totalMarks}<br />
                Obtain Marks : {marks}
            </div>
        )
    }

    subQuiz() {
        const { subQuiz } = this.state;
        return (
            <div>
                <ol>
                    {subQuiz.Quiz.map((quiz, index) => {
                        return (
                            !quiz.time ? <li key={index + 12}>{this.totalMarks(index)}</li> :
                                <li key={quiz.time + index}>
                                    <div>
                                        Quiz:{index + 1}
                                        <br />
                                        Total Questions:{quiz.totalQuestions}
                                        <br />
                                        TotalTime :{quiz.time}<br />
                                        <button onClick={() => this.startQuiz(index)}>
                                            Start Quiz
                                </button>
                                    </div>
                                </li>
                        )
                    })}
                </ol>
            </div>
        )
    }
    render() {
        const { mainQuiz, quizIndex, user, userNumber } = this.props;
        console.log(quizIndex, userNumber, user);
        const { startQuiz, subQuiz, allUsers } = this.state;
        console.log(allUsers);
        return (
            <div className="container-fluid">
                <div>
                    <h2>
                        {subQuiz.name}
                    </h2>
                </div>
                {startQuiz ? <QuizScreen showMarks={this.showMarks} startQuiz={startQuiz} />
                    :
                    <div>
                        <div>
                            {this.subQuiz()}
                        </div>
                        <button onClick={mainQuiz}>
                            Go Back
                        </button>
                    </div>}

            </div>
        )
    }

}

export default SubQuiz;