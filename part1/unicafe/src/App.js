import { useState } from 'react'

// a proper place to define a component
const Statistics = (props) => {

  const good = props.good
  const bad = props.bad
  const neutral = props.neutral
  const total = good + bad + neutral

  const findAverage = (good - bad) / (total)
  const findPositive = 100 * good / total
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
        <p>good {good} <br/>
        bad {bad}<br/>
        neutral {neutral} <br/>
        all {total} <br/>
        average {findAverage} <br/>
        positive {findPositive} %
        </p>
      </div>
    ) 
  }
}

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
        <button onClick={increaseGood}>
          good
        </button>
        <button onClick={increaseNeutral}>
          neutral
        </button>
        <button onClick={increaseBad}>
          bad
        </button>
        <h1>statistics</h1>
        <Statistics good={good} bad={bad} neutral={neutral}/>
      </div>
  )
}


export default App