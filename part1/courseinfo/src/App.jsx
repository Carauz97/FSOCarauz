
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
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
 



  return (
    <div>
      <Header course={course} />
    <Part course={part1.name} exercise={part1.exercises}/>
    <Part course={part2.name} exercise={part2.exercises}/>
    <Part course={part3.name} exercise={part3.exercises}/>
    <p>Number of exercises {part1.exercises+part2.exercises+part3.exercises} </p>
    </div>
  )
}

export default App

