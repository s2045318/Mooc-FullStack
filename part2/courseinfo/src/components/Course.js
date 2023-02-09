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
  
export default Course