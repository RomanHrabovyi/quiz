import React, {useState} from 'react';
import './App.scss';

const questions = [
  {
    title: 'React - це ... ?',
    variants: ['бібліотека', 'фреймворк', 'додаток'],
    correct: 0
  },
  {
    title: 'Компонент - це ... ',
    variants: ['додаток', 'частина додатку або сторінки', 'я незнаю що це'],
    correct: 1,
  },
  {
    title: 'Що таке JSX?',
    variants: [
      'Це простий HTML',
      'Це функція',
      'Це той же HTML, тільки з можливістю виконувати JS-код',
    ],
    correct: 2,
  } 
]

const Result = () => {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="" />
      <h2>Ви відгадали 3 відповіді з 10</h2>
      <button>Спробувати ще</button>
    </div>
  )
}

const Game = ({question, onClickVariant, step}) => {

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

function App() {
  const [step, setStep] = useState(0);
  const question = questions[step];

  const onClickVariant = () => {
    setStep(step + 1)
  }

  return (
    <div className="App">
      <Game step={step} question={question} onClickVariant={onClickVariant}/>
      {/* <Result/> */}
    </div>
  );
}

export default App;
