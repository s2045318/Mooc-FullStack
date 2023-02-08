import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const increaseGood = () => setGood(good+1)
  const increaseBad = () => setBad(bad+1)
  const increaseNeutral = () => setNeutral(neutral+1)
  
  // do not define a component within another component


  return (
    <div>
      <h1>give feedback</h1>
        <Button onClick={increaseGood} name = 'good'/>
        <Button onClick={increaseBad} name = 'bad'/>
        <Button onClick={increaseNeutral} name = 'neutral'/>
        <h1>statistics</h1>
        <Statistics good={good} bad={bad} neutral={neutral}/>
      </div>
  )
}
const Statistics = (props) => {

  const good = props.good
  const bad = props.bad
  const neutral = props.neutral
  const total = good + bad + neutral

  const average = (good - bad) / (total)
  const positive = 100 * good / total
  // Display no statistics if no feedback is given
  if (total == 0) { 
    console.log('page started')
    return (
      <div>
      <h2>No feedback given</h2>
      </div>
   )
  } else {
    console.log('page updated')
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticLine text="good" value ={good} /> 
            <StatisticLine text="bad" value ={bad}/>
            <StatisticLine text="neutral" value ={neutral}/>
            <StatisticLine text="all" value ={total}/>
            <StatisticLine text="average" value = {average}/>
            <StatisticLine text="positive" value = {positive}/> 
          </tbody>
        </table>
      </div>
    ) 
  }
}


const StatisticLine = (props) => {
  if (props.text == "positive"){ 
    return(
    <tr>
      <td>{props.text} </td>
      <td>{props.value.toFixed(2)} %</td>
    </tr>
    )
  }
  return (
    <tr>
      <td>{props.text} </td>
      <td>{props.value.toFixed(2)} </td>
    </tr>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.name}
    </button>
  )
}

export default App