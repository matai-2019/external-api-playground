import React from 'react'
import { Statistic, Card, Icon, Header, Image } from 'semantic-ui-react';

const SunFacts = ({sunFacts, location}) => {
  const items = [
    {key: 'rise', label: 'rise', value: sunFacts.sunrise},
    {key: 'set', label: 'set', value: sunFacts.sunset},
    {key: 'distance', label: 'distance (km)', value: sunFacts.sun_distance}
  ]
return (
  <Card fluid>
    <Image src='/images/sun.gif' wrapped ui={false} />
    <Card.Content>
      <Header as='h3'><Icon name='sun outline' size='big' color='orange'/>Sun Facts</Header>
      <Statistic.Group items={items} />
    </Card.Content>
    <Card.Content extra>
      <p><Icon name='map pin'/>based on <strong>{location}</strong> location</p>
    </Card.Content>
  </Card>
)
}

export default SunFacts