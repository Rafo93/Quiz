import React from "react";
import './FinishedQuiz.css'
import Button from "../UI/Button/Button";

const FinishedQuiz = props => {
    console.log(props);
    const successCount = Object.keys(props.results).reduce((total, key) => {
       if(props.results[key] === 'success') {
           total++
       }
       return total
    },0);
    return (
        <div className='FinishedQuiz'>
            <ul>
                {
                    props.quiz.map((quizItem, index) => {
                        let cls;
                        let icls;
                        if(props.results[quizItem.id] === 'success') {
                            cls = 'success';
                            icls = 'fa fa-check'
                        } else if(props.results[quizItem.id] === 'error') {
                            cls = 'error';
                            icls = 'fa fa-times'
                        }
                        return (
                            <li
                                className={cls}
                                key={index}
                            >
                                <strong>{index +1}</strong>.&nbsp;
                                {quizItem.question}
                                <i  className={icls}/>
                            </li>
                        )
                    })
                }
            </ul>

            <p>Correct is { successCount } from {props.quiz.length}</p>
            <div>
                <div>
                    <Button onClick={props.onRetry}>Retry</Button>
                </div>
            </div>
        </div>
    )
};

export default FinishedQuiz
