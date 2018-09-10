import React, { Component } from 'react';
// import QuizData from './QuizData';
import SubQuiz from './SubQuiz';


class QuizMain extends Component {

    constructor() {
        super();
        this.state = {
            subQuiz: '',
            userNumber: '',
            user: '',
            quizIndex: ''
        }
        this.mainQuiz = this.mainQuiz.bind(this)
    }
    componentWillMount() {
        const userNumber = this.props.userNumber
        this.setState({ userNumber })

    }
    mainQuiz() {
        this.setState({ subQuiz: '' })
    }

    subQuiz(index) {
        const { QuizData } = this.props.user;
        const { user } = this.props;
        let { subQuiz } = this.state;
        subQuiz = QuizData[index];
        console.log(subQuiz);
        this.setState({ subQuiz, user, quizIndex: index })
    }
    quizList() {
        const { QuizData } = this.props.user;
        return (
            <div>
                <ol>
                    {QuizData.map((quiz, index) => {
                        return (
                            <li key={quiz.name}>
                                {quiz.name}
                                <br />
                                <button onClick={() => this.subQuiz(index)}>
                                    Show All Related Quiz
                                </button>
                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }

    render() {
        const { subQuiz, userNumber, user, quizIndex } = this.state;
        console.log(userNumber);
        return (
            <div>
                {subQuiz ?
                    <SubQuiz
                        userNumber={userNumber}
                        subQuiz={subQuiz}
                        quizIndex={quizIndex}
                        mainQuiz={this.mainQuiz}
                        user={user}
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