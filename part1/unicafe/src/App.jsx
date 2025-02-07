import { useState } from 'react'




const Button = (props) => {

 
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
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

    

      <div>
      <h2>
          Statistics
        </h2>
        <p>Bad: {bad}</p>
        <p>Neutral: {neutral}</p>
        <p>Good: {good}</p>
      </div>

    </div>
  )
}

export default App