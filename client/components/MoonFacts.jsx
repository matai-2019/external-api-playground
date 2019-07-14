import React from 'react'
import { Statistic, Card, Icon, Header, Image } from 'semantic-ui-react';

const MoonFacts = ({moonFacts}) => {
  const items = [
    {key: 'rise', label: 'rise', value: moonFacts.moonrise},
    {key: 'set', label: 'set', value: moonFacts.moonset},
    {key: 'distance', label: 'distance (km)', value: Math.floor(moonFacts.moon_distance)}
  ]
return (
  <Card fluid>
    <Image src='/images/moon.jpg' wrapped ui={false} />
    <Card.Content>
      <Header as='h3'><Icon name='moon outline' size='big' color='yellow'/>Moon Facts</Header>
      <Statistic.Group items={items} />
    </Card.Content>
  </Card>
  )
}

export default MoonFacts