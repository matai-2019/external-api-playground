import React from 'react'

import { getAstro } from '../api'

class Facts extends React.Component {

  componentDidMount() {
    getAstro()
    .then( res => console.log(res))
  }

  render() {
    return (
      <>
      <h2>Facts</h2>
      </>
    )
  }
}

export default Facts
