const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const courses_render = courses.map(course => <Course key={course.id} course={course} />)
  return <div>{courses_render}</div>
}

const Course = ({course}) => {
  const title = course.name
  const parts = course.parts
  return (
    <div>
      <Header title={title}/>
      <Content parts={parts}/>
    </div>
  )
}
const Content = ({parts}) => {
  
  const result = parts.map(part => <Part key={part.id} part={part} />)
  const total = parts.reduce((s, p) => s + p.exercises,0)
  return (
    <div>
      {result}
      <b>total of {total} exercises</b> 
    </div>
  )
}

const Part = ({part}) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}
const Header = ({title}) => <h1>{title}</h1>
export default App