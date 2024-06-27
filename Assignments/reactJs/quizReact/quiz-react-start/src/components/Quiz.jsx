import { useState } from "react";
import question from "../assets/js/question";


export default function Quiz() {
    console.log(question[0].text)

    const [userAnswers, setUserAnwers] = useState([]);
    const activeQuestonIndex = userAnswers.length;

    function handleAnwser(selectedAnswer) {
        setUserAnwers(
            (previusAnswer) => {
                return [...previusAnswer, selectedAnswer];
            }
        )
    }

    return (
        <>
            <main>
                <div id="quiz">
                    <div id="question">
                        <h2>{question[0].text}</h2>
                        <ul id="answers">
                            {
                                question[0].answers.map((answer) =>
                                    <li key={answer} className="answer"><button onClick={() => handleAnwser(answer)}>{answer}</button></li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
}