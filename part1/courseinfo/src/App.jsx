
//hello friend :) i'm CZ

const Header = (props) =>{

  return(

     <div>
     <h1>{props.course}</h1>
     </div>
  )

}

const Content = ({parts})=>{

  return(
    <>

{parts.map((part,index)=>(
<div key={index}>
<p>
{part.name} {part.exercises}
</p>
</div>
    ))}
   
 
  </>);
}

const Total = ({parts}) =>{

  let total=0;

for (let index = 0; index < parts.length; index++) {

 total =total + parts[index].exercises;
  console.log(total);
}

console.log("total:" + total)
  return(
    <>    
    <p>Number of exercises {total}</p>
    </>

  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

const content =[
  {
  name: part1, exercises: exercises1},
{
  name: part2, exercises: exercises2},
{
  name: part3, exercises: exercises3},
]

console.log(content)


  return (
    <div>
      <Header course={course} />
      <Content parts={content}/>
      <Total parts={content} />
    </div>
  )
}

export default App

