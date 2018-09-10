import React, { Component } from 'react';
import QuizScreen from './QuizScreen';


class SubQuiz extends Component {
    constructor() {
        super()
        this.state = {
            startQuiz: ''
        }
        this.startQuiz = this.startQuiz.bind(this);
    }

    startQuiz(index) {
        const { subQuiz } = this.props;
        const startQuiz = subQuiz.Quiz[index]
        this.setState({ startQuiz });
    }



    subQuiz() {
        const { subQuiz } = this.props;
        return (
            <div>
                <ol>
                    {subQuiz.Quiz.map((quiz, index) => {
                        return (
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
        const { subQuiz, mainQuiz } = this.props;
        const { startQuiz } = this.state;
        return (
            <div>
                <div>
                    <h2>
                        {subQuiz.name}
                    </h2>
                </div>
                {startQuiz ? <QuizScreen startQuiz={startQuiz} />
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