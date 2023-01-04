import React, {useState} from 'react';
import Result from './Result';
import Game from './Game';
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

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1)

    if(index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  return (
    <div className="App">
      {
        step !== questions.length ? 
        <Game step={step} 
              question={question} 
              onClickVariant={onClickVariant} 
              questions={questions}/> :
        <Result correct={correct} 
                questions={questions}/>
      }
    </div>
  );
}

export default App;
