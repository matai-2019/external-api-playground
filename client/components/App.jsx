import React from 'react'
import Trump from './TrumpApi'
import TereoProverb from './ProverbsApi'

const App = () => {
  // state = {}

  // render () {
  return (
    <React.Fragment>
      <h1>So, lets load up some Trump tweets!</h1>
      <Trump/>
      <h1>Now, lets try some Te-Reo proverbs!</h1>
      <TereoProverb/>
    </React.Fragment>
  )
}

export default App
