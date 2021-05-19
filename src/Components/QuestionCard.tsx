import React from 'react'

import { Wrapper, ButtonWrapper } from '../Styles/QuestionCard.styles';

type props ={
    question : string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNumber: number;
    totalQuestions: number;

}

export const QuestionCard: React.FC<props> = ({ question, answers, callback, userAnswer, questionNumber, totalQuestions }) => {
    return (
        <Wrapper>
            <p>
                Question:  {questionNumber} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML = {{__html: question}} />
            <div>
                {answers.map(answer => (
                    <ButtonWrapper
                        correct =  { userAnswer?.correct_answer === answer }
                        userClicked = { userAnswer?.answer === answer }
                    >
                        <button disabled = {userAnswer} value = {answer} onClick = { callback}>
                            <span dangerouslySetInnerHTML = {{ __html: answer}} />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    )
}
