import React, { Component } from 'react';
import QuizData from './QuizData';
import SubQuiz from './SubQuiz';


class QuizMain extends Component {
    constructor() {
        super();
        this.state = {
            subQuiz: '',

        }
        this.mainQuiz = this.mainQuiz.bind(this)
    }

    mainQuiz(){
        this.setState({subQuiz:''})
    }

    subQuiz(index) {
        let { subQuiz } = this.state;
        subQuiz = QuizData[index];
        console.log(subQuiz);
        this.setState({ subQuiz })
    }
    quizList() {
        return (
            <div>
                <ol>
                    {QuizData.map((quiz, index) => {
                        return (
                            <li key={quiz.name}>
                                {quiz.name}
                                <button onClick={() => this.subQuiz(index)}>
                                    Start Quiz
                                </button>
                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }

    render() {
        const { subQuiz } = this.state;
        return (
            <div>
                {subQuiz ?
                    <SubQuiz
                        subQuiz={subQuiz}
                        mainQuiz={this.mainQuiz}
                    />
                    : <div>
                        {this.quizList()}
                    </div>
                }
            </div>
        )
    }
}
export default QuizMain;