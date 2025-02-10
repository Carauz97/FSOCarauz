import { useState } from 'react'

const Button = (props) => (<button onClick={props.handleClick}>{props.text}</button>)


const AnecdotesPanel = (props) =>( <p>
  {props.anecdotes[props.selected]}
</p>)


function App() {
  const [selected, setSelected] = useState(0)
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const MixSelected = (array) => {
    const mixed = () => {
      let newNum;
      do {
        newNum = Math.floor(Math.random() * array.length);
      } while (newNum === selected);
      console.log(newNum)
      setSelected(newNum); 
    };

    return mixed;
  }
  

  return (
    <div>
       <Button handleClick={MixSelected(anecdotes)} text="Random"></Button>
      <AnecdotesPanel
      anecdotes={anecdotes} selected={selected}></AnecdotesPanel>
     
    </div>
  )
}
export default App
