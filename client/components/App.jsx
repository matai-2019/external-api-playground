import React, { Component } from 'react'

export default class App extends Component {
  state = {
    people: [1, 2]
  }

  componentDidMount () {
    // make api call
  }
  render () {
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>DEVELOCONS</h1>
        <div className="people-list">
          {
            this.state.people.map(person => {
              return <div key={person} className="person">
                <h3>{person.name}</h3>
                <div style={{ position: 'relative' }}>
                  <img src={person.img} className={{ 'display-img': true, 'img': true }} alt=""/>
                  <img src={person.robot} className={{ 'display-img': true, 'robot': true }} alt=""/>
                </div>
                <h2>hello</h2>
              </div>
            })
          }
        </div>
      </>
    )
  }
}
