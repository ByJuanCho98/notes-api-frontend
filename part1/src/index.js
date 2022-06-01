import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';

const Title = ({color, text})=>{
  return (
    <h1 style={{color: color}}>
      {text}
    </h1>
  )
}
const contentTitle = 'Welcome'
const whiteColor = 'white'

//* El ESTADO se lo pasamos a un COMPONENTE
const Counter = ({cont}) => {
  return <Title color={whiteColor} text={cont}/>
}

const App = () => {

  const [cont, setStateCont] = useState(0)
  const handleClick = () => {
    //setStateCont(cont+1)
    setStateCont((prevCont)=>{
      return prevCont + 1
    })
  }

  const esPar = cont % 2 === 0
  let mensajePar = esPar ? 'par' : 'impar' 

  return(
    <>
      <Title color={whiteColor} text={contentTitle}/>
      <Counter cont={cont} />
      <p style={{color: whiteColor}}>{mensajePar}</p>

      <button onClick={handleClick} style={{color: whiteColor}}>Incrementar</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//? ejercicio componentes
/* import React from 'react'
import ReactDOM from 'react-dom'

const Title = ({course}) => {
  return <h1>{course}</h1>
}

const Subtitle = ({title, text}) => {
  return (
    <p>
      {title} <br/>
      {text}
    </p>
  )
}

const SumaDeEjercicios = ({a, b, c}) => a + b+ c


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course}/>
      <Subtitle title={part1} text={exercises1} />
      <Subtitle title={part2} text={exercises2} />
      <Subtitle title={part3} text={exercises3} />
      Number of exercises <SumaDeEjercicios a={exercises1} b={exercises2} c={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) */
