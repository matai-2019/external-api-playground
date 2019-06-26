import React, { Component } from 'react'

import { getPicOfTheDay, translateToYodish } from '../api'

export class App extends Component {
  state = {
    picture: null,
    text: '',
    translation: null
  }

  componentDidMount() {
    getPicOfTheDay((err, res) => {
      this.setState({
        picture: res.body
      })
    })
  }

  handleInput = (event) => {
    this.setState({
      text: event.target.value
    }) 
  }

  handleClick = () => {
    translateToYodish(this.state.text, (err, res) => {
      this.setState({translation: res.body.contents.translated})
    })
  }

  render() {
    const { picture } = this.state
    return (
      <>
        <div className="container"><h1>NASA Picture of the Day</h1>
          {picture && (
            <div className="container">
              <h2>{picture.title}</h2>
              <img src={picture.url} alt={picture.title} />
              <p>{picture.explanation}</p>
            </div>
          )}
        </div>
        <div className="container">
          <h2>Yodafi</h2>
          <input placeholder="Text in here, you must put" onChange={this.handleInput} value={this.state.text} />
          <button onClick={this.handleClick}>Translate</button>
          <p>{this.state.translation && (
            this.state.translation
          )
          }</p>
        </div>
      </>
    )
  }
}

export default App