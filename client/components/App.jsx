import React from 'react'
import { getSpecies } from '../api'
import { Link } from "react-router-dom"

class App extends React.Component {
  state = {
    species: [],
    speciesList: null
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

    const race = this.state.species



    return (


      <React.Fragment>
        <h1>Star Trek API</h1>
        <button onClick={this.handleClick}>Display All Species</button>
        <ul>
        {race.map(e => {
          return <li key={e.uid}><p>{e.name}</p></li>
        })}
        </ul>
      </React.Fragment>
    )
  }

}

export default App
