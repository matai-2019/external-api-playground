import React from 'react'

import { picOfADay } from '../api'

class App extends React.Component {
  state = {
    date: null,
    explanation: null,
    title: null,
    image: null
  }

  handleClick = () => {
    picOfADay()
      .then(data => {
        this.setState({
          date: data.date,
          explanation: data.explanation,
          title: data.title,
          image: data.hdurl
        })
      })
  }

  hideClick = () => {
    this.setState({
      date: null,
      explanation: null,
      title: null,
      image: null
    })
  }

  render () {
    const data = this.state
    return (
      <React.Fragment>
        <h1>Nasa Picture Of The Day!</h1>
        <button onClick={this.handleClick}>Click Me!</button>
        <button onClick={this.hideClick}>Hide</button>
        {data.title && (<h2>{data.title} from {data.date}</h2>
        )}
        {data.image && (<img src={data.image} height="600" width="600"></img>)}
        {data.explanation && (<p>{data.explanation}</p>)}
      </React.Fragment>
    )
  }
}

export default App
