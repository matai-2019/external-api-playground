import React from 'react'
import { getSpecies } from '../api'

class App extends React.Component {
  state = {
    species: [],
    //randomSpecies: null
  }

  componentDidMount() {
    getSpecies()
      .then(species => {
        this.setState({
          species: species
        })
      })
  }

  handleClick = () => {
    const species = this.state.species
    this.setState({
      species
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Star Trek API</h1>
        <button onClick={this.handleClick}>Display All Species</button>
        {<p>{this.state.species.name}</p>}
      </React.Fragment>
    )
  }

}

export default App
