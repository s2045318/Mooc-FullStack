import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)



  const increaseGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
    console.log('good increased')
  }
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
    console.log('good increased')
  }
  const increaseBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    console.log('good increased')
  }
  console.log('application (re)started')
//  ,  setAvg(findavg(good,bad,total))
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
      <p>
        good {good} <br/>
        neutral {neutral} <br/>
        bad {bad} <br/>
        all {total} <br/>
        average {findAverage(good,bad,total)} <br/>
        positive {findPositive(good, total)} %
      </p>
    </div>
  )
}
const findAverage = (good,bad,total) => (good - bad) / (total)
const findPositive = (good,total) => 100 * good / total

export default App