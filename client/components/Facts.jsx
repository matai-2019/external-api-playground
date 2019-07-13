import React from 'react'
import MoonFacts from './MoonFacts'

import { getAstro } from '../api'
import { Grid } from 'semantic-ui-react';

class Facts extends React.Component {
  state = {
    astro: {}
  }

  componentDidMount() {
    getAstro()
    .then( astro => this.setState({astro}))
  }

  render() {
    const astro = this.state.astro
    const moonFacts = {
      moon_altitude: astro.moon_altitude,
      moon_azimuth: astro.moon_azimuth,
      moon_distance: astro.moon_distance,
      moon_parallactic_angle: astro.moon_parallactic_angle,
      moonrise: astro.moonrise,
      moonset: astro.moonset
    }
    console.log(astro)
    return (
      <>
      <h2>Facts</h2>
      <p>Date: {astro.date}</p>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={8}>
            <MoonFacts moonFacts={moonFacts}/>
          </Grid.Column>
          <Grid.Column width={8}>
            <MoonFacts moonFacts={moonFacts}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </>
    )
  }
}

export default Facts
