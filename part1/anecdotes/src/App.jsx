import { useState } from 'react'

const Button = (props) => (<button onClick={props.handleClick}>{props.text}</button>)


const AnecdotesPanel = (props) => (<div><h2>Anecdotes of the day</h2><p>{props.anecdotes[props.selected]}</p>

<p>has {props.votes[props.selected]} votes.</p></div>)


const MostAnecdote = (props) =>{

  

  const votes = props.votes;
  const mayor = Math.max(...votes);

  if (Array.isArray(votes) != true) {
    throw new Error({name:'type error', message:'It needs an Array'}) 
  }
  if (mayor != 0) {
    return(
      <div>
      <h2>Anecdote with most votes</h2>
    
    {props.anecdotes[votes.indexOf(mayor)]}
      </div>
    
    )
  }else{
    return(  <h2>There are not votes</h2>
    )
  }

}


function App() {
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
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(new Array(anecdotes.length).fill(0))




  const MixSelected = (array) => {
    const mixed = () => {
      let newNum;
      do {
        newNum = Math.floor(Math.random() * array.length);
      } while (newNum === selected);
      console.log("selected:",newNum)
      setSelected(newNum);
    };

    return mixed;
  }

  const Vote = (selected) => {

    const ListVotes = votes;

    return () => {
      const copy = [...ListVotes]
      copy[selected] += 1
      console.log("you have added +1 power to:",selected)
      console.log(copy)
      setVote(copy)
    }
  }
  return (
    <div>
      <Button handleClick={MixSelected(anecdotes)} text="Random"></Button>
      <Button handleClick={Vote(selected)} text="Vote"></Button>
      <AnecdotesPanel
        anecdotes={anecdotes} selected={selected} votes={votes}></AnecdotesPanel>
        <MostAnecdote votes={votes} anecdotes={anecdotes}></MostAnecdote>

    </div>
  )
}
export default App
