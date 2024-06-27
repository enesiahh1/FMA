import { useState } from 'react';
import QUESTIONS from '../assets/js/questions.js';

export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    function handleAnswer(selectedAsnwer){
        setUserAnswers(
            (previusAnswer) => {
                return [...previusAnswer, selectedAsnwer];
            }

        );
    }

    return (
        <main>
            <div id="quiz">
                <div id="question">
                    <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                    <ul id="answers">
                        {
                            QUESTIONS[activeQuestionIndex].answers.map((answer) =>
                                <li key={answer} className="answer">
                                    <button onClick={() => handleAnswer(answer)} >{answer}</button>
                                </li>
                              )
                        
                        }
                    </ul>
                </div>
            </div>
        </main>
    );
}