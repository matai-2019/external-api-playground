import React, { Component } from 'react'

import { getPicOfTheDay } from '../api'

export class App extends Component {
  state = {
    picture: null
  }

  componentDidMount() {
    getPicOfTheDay((err, res) => {
      this.setState({
        picture: res.body
      })
    })
  }

  render() {
    const {picture} = this.state
    return (
      <>
        <h1>React development has begun!</h1>
       {picture && (
         <div className="container">
         <h2>{picture.title}</h2>
         <img src={picture.url} alt={picture.title} />
         <p>{picture.explanation}</p>
       </div>
       )}
      </>
    )
  }
}

export default App