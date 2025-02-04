
//hello friend :) i'm CZ

const Header = (props) =>{

  return(

     <div>
     <h1>{props.course}</h1>
     </div>
  )

}

const Part = ({course, exercise}) =>{

  return(
    <>
  <h1>{course}</h1>
    <p>
     {exercise}
    </p>
    </>
    )
    
  }

const Content = ({parts})=>{

  return(
    <>
{parts.map((part,index)=>(

  <div key={index}>

  <Part course={part.name} exercise={part.exercises} />
  </div>
))}


  </>
  )
}




const Total = ({parts}) =>{

  const exercises= parts.map(value =>value.exercises)

  const total= exercises.reduce((anterior, actual) => anterior + actual, 0);

console.log('Number of exercises: '+total)
  return(
    <>    
    <p>Number of exercises {total}</p>
    </>

  )
}


const App = () => {

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]



  return (
    <div>
    <Header course={course} />
   <Content  parts={parts} />
   <Total parts={parts}/>
    </div>
  )
}

export default App

