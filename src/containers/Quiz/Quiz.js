import React, {Component} from "react";
import './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component{

    state = {
        results: {},
        isFinished: false,
        answerState: null,
        activeQuestion: 0,
        quiz: [
            {
                id: 1,
                trueAnswer: 2,
                question: 'What color is sky',
                answers: [
                    {text: 'red', id: 1},
                    {text: 'blue', id: 2},
                    {text: 'yellow', id: 3},
                    {text: 'black', id: 4}
                    ]
            },
            {
                id: 2,
                trueAnswer: 1,
                question: 'Which one  of is  capital of Armenia',
                answers: [
                    {text: 'Erevan', id: 1},
                    {text: 'Berlin', id: 2},
                    {text: 'Madrid', id: 3},
                    {text: 'Paris', id: 4}
                ]
            },
            {
                id: 3,
                trueAnswer: 4,
                question: 'Which one  of is  capital of Russian',
                answers: [
                    {text: 'Kiev', id: 1},
                    {text: 'Berlin', id: 2},
                    {text: 'London', id: 3},
                    {text: 'Moscow', id: 4}
                ]
            },
            {
                id: 4,
                trueAnswer: 3,
                question: 'The best footbal club',
                answers: [
                    {text: 'Real Madrid', id: 1},
                    {text: 'Juventus', id: 2},
                    {text: 'FC Barcelona', id: 3},
                    {text: 'Arsenal', id: 4}
                ]
            },
            {
                id: 5,
                trueAnswer: 2,
                question: 'Who is the best football player',
                answers: [
                    {text: 'C.Ronaldu', id: 1},
                    {text: 'L.Messi', id: 2},
                    {text: 'Neymar J.', id: 3},
                    {text: 'Rooney', id: 4}
                ]
            }
        ]
    };

    onAnswerClick = (answerId) => {
        if(this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if(this.state.answerState[key] === 'success') {
                return
            }
        }
        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;
        if(question.trueAnswer === answerId) {
            if(!results[question.id]) {
                results[question.id] = 'success'
            }
            this.setState({
                answerState: {[answerId] : 'success'},
                results
            });
            const timeout = window.setTimeout(() => {
                if(this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion +1,
                        answerState: null
                    })
                }

                window.clearTimeout(timeout);
            },1000)
        }else {
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerId] : 'error'},
                results
            })
        }
    };
    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }
    retryHandler = () => {
        // console.log(this.state);
        this.setState({
            results: {},
            isFinished: false,
            answerState: null,
            activeQuestion: 0,
        })
    };

    render() {
        return (
            <div className='Quiz'>
                <div className='QuizWrapper'>
                    <h1>Answer the cuestions</h1>

                    {
                        this.state.isFinished ?
                            <FinishedQuiz
                                results = {this.state.results}
                                quiz = {this.state.quiz}
                                onRetry = {this.retryHandler}
                            />
                           :   <ActiveQuiz
                                answers = {this.state.quiz[this.state.activeQuestion].answers}
                                question = {this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick = {this.onAnswerClick}
                                quizLength = {this.state.quiz.length}
                                answerNumber = {this.state.activeQuestion + 1}
                                state = {this.state.answerState}
                                 />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz
