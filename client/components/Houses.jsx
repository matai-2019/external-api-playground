import React from 'react'
import { getStudentByHouses, getHouses } from '../api'
import HouseStudents from './HouseStudents'

class Houses extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      students: [],
      isVisible: false,
      houses: []
    }
  }

  sortHouse = () => {
    getHouses()
      .then(houses => {
        this.setState({
          houses: houses
        })
      })
  }

  closeHouses = () => {
    this.setState({
      isVisible: false
    })
  }

  render () {
    return (
      <>
        <h1>Houses:</h1>
        <button onClick={this.sortHouse}>Sort Characters by House</button>
        <ul>
          {this.state.houses.map(house =>
            <li key={house._id}><button onClick={
              () => {
                return getStudentByHouses(house._id)
                  .then(
                    students => {
                      this.setState({
                        students: students,
                        isVisible: true
                      })
                    })
              }}>{house.name}</button></li>
          )}
        </ul>
        {this.state.isVisible && <HouseStudents students={this.state.students} />}
        <button onClick={this.closeHouses}>Close Houses</button>
      </>
    )
  }
}

export default Houses
