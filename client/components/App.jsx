import React from 'react'
import Trump from './TrumpApi'
import TereoProverb from './ProverbsApi'

const App = () => {
  // state = {}

  // render () {
  return (
    <React.Fragment>
      <img src="https://media.tenor.com/images/8833a5a0dffd89e5e366979c61ca6830/tenor.gif" alt="US Flag"/>
      <h1>So, lets load up some Trump tweets!</h1>
      <Trump/>
      <img src="https://media.giphy.com/media/bg7mEYiCcnF6w/giphy.gif" alt="NZ Flag"/>
      <h1>Now, lets try some Te-Reo proverbs!</h1>
      <TereoProverb/>
    </React.Fragment>
  )
}

export default App
