
const Header = (props) => {

const name = props.name;
console.log("",name);

    return (

        <div>
            <h1>{name}</h1>
        </div>
    )

}

const Part = ({ course, exercise }) => {

    return (
        <>
            <h2>{course}</h2>
            <p>
                {exercise}
            </p>
        </>
    )

}

const Content = ({ parts }) => {

    return (
        <>
            {parts.map((part) => (

                <div key={part.id}>
                    <Part course={part.name} exercise={part.exercises} />
                </div>
            ))}


        </>
    )
}



const Total = ({ parts }) => {

    const exercises = parts.map(value => value.exercises)

    const total = exercises.reduce((anterior, actual) => anterior + actual, 0);

    console.log('Number of exercises: ' + total)
    return (
        <>
            <p>Number of exercises {total}</p>
        </>

    )
}


const Course = (props) => {

    const course = props.course


    return (
        <div key={course.id}>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const Courses = (props) =>{

    const courses = props.courses
     
        return (
          courses.map(course =>( <Course key={course.id} course={course} />)) 
        )
    
    }

export default Courses