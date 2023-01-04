

const Result = ({correct, questions}) => {
    return (
      <div className="result">
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="" />
        <h2>Ви відгадали {correct} відповіді з {questions.length}</h2>
        <a href="/">
          <button>Спробувати ще</button>
        </a>
      </div>
    )
}

export default Result;