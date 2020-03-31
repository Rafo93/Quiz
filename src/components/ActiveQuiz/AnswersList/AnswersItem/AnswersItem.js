import React from "react";
import './AnswersItem.css'

const AnswersItem = props => {
    let cls;
    if(props.state === 'success') {
       cls = 'AnswersItemSuccess'
    }else if(props.state === 'error') {
        cls = 'AnswersItemError'
    }else {
        cls = 'AnswersItem'
    }
    return (
        <li
            className={cls}
            onClick = {() => props.onAnswerClick(props.answer.id)}
        >
            {props.answer.text}
        </li>
    )
};

export default AnswersItem
