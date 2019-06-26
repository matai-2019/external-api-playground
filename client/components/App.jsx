import React, { Component } from 'react'
import { getPeople } from '../api'

const peopleList = [{ name: 'anisha' }, { name: 'tam' }, { name: 'taine' }, { name: 'rahul' }, { name: 'raaya' }, { name: 'ash' }, { name: 'celia' }, { name: 'andre' }, { name: 'noel' }, { name: 'bryce' }]

export default class App extends Component {
  state = {
    people: peopleList,
    test: ''
  }
  componentDidMount () {
    getPeople(this.setPeople)
  }

  setPeople = (err, people) => {
    if (err) {
      console.log(err)
    } else {
      this.setState({
        test: people
      })
    }
  }

  render () {
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>DEVELOCONS</h1>
        <div className="people-list">
          {
            this.state.people.map(person => {
              return <div key={person} className="person">

                <div style={{ position: 'relative' }}>
                  <img src={'https://robohash.org/' + person.name} className={{ 'display-img': true, 'robot': true }} alt=""/>
                  <h3 style={{ textAlign: 'center' }}>{person.name}</h3>
                </div>
              </div>
            })
          }
        </div>
      </>
    )
  }
}
