import React from 'react'

const MoonFacts = ({moonFacts}) => {
return (
  <>
  <p>The moons distance from you is {moonFacts.moon_distance}</p>
  </>
)
}

export default MoonFacts