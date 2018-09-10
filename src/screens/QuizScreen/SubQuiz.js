import React, { Component } from 'react';


class SubQuiz extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        const { subQuiz } = this.props;
        return (
            <div>
                <div>
                    <h2>
                        {subQuiz.name}
                    </h2>
                </div>
                <div>
                    <ol>
                        {subQuiz.Quiz.map((quiz, index) => {
                            return (
                                <li key={quiz.time + index}>
                                    <div>
                                        Quiz:{index +1}
                                        <br />
                                        Total Questions:{quiz.totalQuestions}
                                    </div>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }

}

export default SubQuiz;