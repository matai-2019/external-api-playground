import React from 'react'
// import _random from 'lodash.random'

import { getSpells } from '../api'
// const api = require('../api')

class Spells extends React.Component {
state = {
  spell: '',
  type: '',
  effect: ''
}

// handleClick = () => {
//     const randomSpells = this.state.spell[_random(0, this.state.spell.length - 1)]

//     this.setState({
//       randomSpells
//     })
//   }

handleChange = (event) => {
  this.setState({ spell: event.target.value })
}

// handleSubmit = () => {
//   getSpells(this.state.data)
//     .then(spell => {
//       this.setState({
//         spell
//       })
//     })
// }

handleClick = () => {
    getSpells ()
      .then(data => {
        this.setState({
          spell: data.spell,
          type: data.type,
          effect: data.effect,
        })
        const randomSpells = this.state.spell[_random(0, this.state.spell.length - 1)]

    this.setState({
      randomSpells
    })
      })
  }

render () {
    const { randomSpells } = this.state

    return (
      <React.Fragment>
        <input placeholder="Witch/Wizard" type="text" value={this.state.name}onChange={this.handleChange} /><br />
        <button onClick={this.handleClick}>Reveal Spell!</button>
        {randomSpells && (<h2>{randomSpells.spell}</h2>)}
        <div>
        <button onClick={this.handleSubmit}>Submit</button><br />
        </div>
      </React.Fragment>
    )
  }
}
// render () {
//   return (
//     <>
//     {/* <div>
//       <input placeholder="Witch/Wizard" type="text" value={this.state.name} onChange={this.handleChange} /><br />
//       <button onClick={this.handleSubmit}>Submit</button><br />
//     </div>

//   {this.state.spell && (
//     <div>
//       <h2>Your spell is:</h2>
//       <p>{this.state.spell}</p>
//     </div> */}
//   )}
//     </>
//   )
// }
// }

export default Spells
