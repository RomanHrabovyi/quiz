
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

const Game = () => {
  return (
    <>
      <div className="progres">
        <div style ={{width: '50%'}}className="progress__inner"></div>
      </div>
      <h1>Що...?</h1>
      <ul>
        <li>Відповіді</li>
        <li>Відповіді</li>
        <li>Відповіді</li>
      </ul>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Game/>
      {/* <Result/> */}
    </div>
  );
}

export default App;
