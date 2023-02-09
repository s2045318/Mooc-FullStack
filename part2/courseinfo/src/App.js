const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return <Course course={course} />
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