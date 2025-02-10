import { useState } from 'react'


const Statistics = (props) => {


  if (props.good + props.neutral + props.bad === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given yet</p>
      </div>)
    
  }else{
    const good = props.good;
    const neutral = props.neutral;
    const bad = props.bad;
  
    const total = good + neutral + bad;
    const average = good + neutral + bad > 0 ? (good - bad) / (good + neutral + bad) :0 ;
    const positive = good + neutral + bad > 0 ? (good / (good + neutral + bad)) * 100:0;
    return(
      <>
       <div>
       <h2>
          Statistics
         </h2>
      <StatisticLine text="Bad:" value={bad}/>
      <StatisticLine text="Neutral:" value={neutral}/>
      <StatisticLine text="Good:" value={good}/>
      <StatisticLine text="Total:" value={total}/>
       </div>
     
       <div>
       <h2>Average</h2>
       <StatisticLine text="" value={average}/>
       </div>
     
      <div>
      <h2>Positive</h2>
      <StatisticLine text="" value={positive} symbol="%"/>
      </div></>)
  }



}

const Button = (props) => {

 
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props)=>{

  const text = props.text;
const value = props.value;
const symbol = props.symbol;

  return(
    <p>{text} {value} {symbol}</p>
  )
}


const App = () => {


  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const valor = {good, neutral, bad};
  console.log("reviews: ", valor); 


  return (
    <div>
      <h2>Reviews</h2>

      <Button handleClick={() => setBad(bad + 1)} text='bad :(' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral :|' />
      <Button handleClick={() => setGood(good + 1)} text='good :)' /> 
      <Statistics {...valor}/>

    </div>
  )
}

export default App