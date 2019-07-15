import React, { Component } from 'react'
import { getPeople } from '../api'

export default class App extends Component {
  state = {
    people: ['you mean nothing'],
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
        people: people
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

                <div style={{ position: 'relative', height: '400px', width: '400px' }}>
                  <img src={'https://robohash.org/' + person} className={'display-img'} alt="" />
                  <h3 style={{ textAlign: 'center' }} className='name'>{person}</h3>
                </div>
              </div>
            })
          }
        </div>
      </>
    )
  }
}
