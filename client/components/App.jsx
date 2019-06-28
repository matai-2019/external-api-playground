import React from 'react'
import Spells from './Spells'

import api from '../api'

const App = () => {
  return (
    <div>
      <h1 className='title'>The wand chooses the wizard..</h1>
        <>
        <Spells />
        </>
    </div>
  )
}

export default App
