
const Game = ({question, onClickVariant, step, questions}) => {

    const percent = Math.round((step / questions.length * 100));
  
    return (
      <>
        <div className="progress">
          <div style ={{width: `${percent}%`}} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {question.variants.map((item, index) => {
            return <li key={item} onClick={() => onClickVariant(index)}>{item}</li>
          })}
        </ul>
      </>
    )
  }

  export default Game;