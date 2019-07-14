import React from 'react'
import MoonFacts from './MoonFacts'
import SunFacts from './SunFacts'

import { getAstro } from '../api'
import { Grid } from 'semantic-ui-react';

class Facts extends React.Component {
  state = {
    date: '',
    dayLength: '',
    location: {},
    moonFacts: {},
    sunFacts: {}
  }

  componentDidMount() {
    getAstro()
    .then( astro => {
      this.setState({
        date: astro.date,
        dayLength: astro.day_length,
        location: astro.location,
        moonFacts: {
          moon_altitude: astro.moon_altitude,
          moon_azimuth: astro.moon_azimuth,
          moon_distance: Math.floor(astro.moon_distance),
          moon_parallactic_angle: astro.moon_parallactic_angle,
          moonrise: astro.moonrise,
          moonset: astro.moonset
        },
        sunFacts:{
          solar_noon: astro.solar_noon,
          sun_altitude: astro.sun_altitude,
          sun_azimuth: astro.sun_azimuth,
          sun_distance: Math.floor(astro.sun_distance),
          sunrise: astro.sunrise,
          sunset: astro.sunset
        }
      })
    })
  }

  render() {
    const location = this.state.location.district
    const date = this.state.date
    const moonFacts = this.state.moonFacts
    const sunFacts = this.state.sunFacts
    return (
      <>
      <h2>Facts</h2>
      <p>Date: {date}</p>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={8}>
            <MoonFacts moonFacts={moonFacts} location={location}/>
          </Grid.Column>
          <Grid.Column width={8}>
            <SunFacts sunFacts={sunFacts} location={location}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </>
    )
  }
}

export default Facts
