import React from 'react'

import { getMovie } from '../api'

export default class Movies extends React.Component {
  state = {
    movie: null,
    result: null
  }

handleChange = (event) => {
  this.setState({ movie: event.target.value })
}

handleSubmit = () => {
  getMovie(this.state.movie)
    .then(result => {
      this.setState({
        result
      })
    })
}

render () {
  return (
      <>
      <div>
          Enter a movie title:
        <input type="text" value={this.state.name} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>

      {this.state.result && (
        <div>
          {this.state.result.map(x => {
            return (
              <>
              <img src={x.Poster}/>
              <h2>{x.Title}</h2>
              <p>{x.Year}</p>
              </>
            )
          })}
        </div>
      )}
      </>
  )
}
}
