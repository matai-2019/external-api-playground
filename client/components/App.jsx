import React from 'react'
import { getCharacters, getCharDetails } from '../api'
import Character from './Character'
import Houses from './Houses'

class App extends React.Component {

  state = {
    characters: [],
    details: [],
    isVisible: true,
    houses: []
  }

  handleClick = () => {
    getCharacters()
      .then(characters => {
        this.setState({
          characters: characters
        })
      })
  }

  handleClick2 = () => {
    this.setState({
      isVisible: true
    })
  }

  render () {
    const hpPeople = this.state.characters
    const details = this.state.details
    return (
      <>
        <h1>Harry Potter API Practice</h1>
        <button onClick={this.handleClick}>Load all HP characters!</button>
        {this.state.isVisible && <ul>
          {hpPeople.map(e => {
            return <li key={e._id}><button onClick={() => {
              return getCharDetails(e._id)
                .then(details => {
                  this.setState({
                    details: details,
                    isVisible: false
                  })
                })
            }
            }>{e.name}</button></li>
          })}
        </ul>}
        {!this.state.isVisible && <Character name={details.name} house={details.house} bloodStatus={details.bloodStatus} role={details.role} species={details.species} school={details.school}/>}
        <button onClick={this.handleClick2}>Choose Another Character</button>
        <Houses />
      </>
    )
  }
}

export default App
