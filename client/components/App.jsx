import React from 'react'

// import api from '../api'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      number: this.randomNumber(300)
    }
  }

  randomNumber (num) {
    return Math.floor(Math.random() * num)
  }

  componentDidMount () {
  }

  render () {
    return (
      <React.Fragment>
        <h1>Number Facts</h1>
        <div className='Number' > {this.state.number} </div>
      </React.Fragment>
    )
  }
}

export default App
