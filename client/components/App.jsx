import React from 'react'
import { getCharacters, getCharDetails } from '../api'
import Character from './Character'

class App extends React.Component {

  state = {
    characters: [],
    details: [],
    isVisible: true
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
    const prop = this.state.details
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
        {!this.state.isVisible && <Character name={prop.name} house={prop.house} bloodStatus={prop.bloodStatus} role={prop.role} species={prop.species} school={prop.school}/>}
        <button onClick={this.handleClick2}>Choose Another Character</button>
      </>
    )
  }
}

export default App
