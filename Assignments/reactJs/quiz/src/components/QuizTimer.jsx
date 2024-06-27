export default function QuizTimer(timeout, onTimeout) {

    let timeBarFill = 100;

    function timerBar() {
        timeBarFille--;
    }

    const timerInt = setInterval(timerBar, 100);

    return (
        <>
            <progress id="question-time" max="[object Object]" value="NaN" />
        </>
    );
}