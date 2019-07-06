import React from 'react'

const Character = (props) => {
  return (
    <>
      <p>{props.name}</p>
      <ul>
        <li>{props.house}</li>
        <li>{props.school}</li>
        <li>{props.species}</li>
        <li>{props.bloodStatus}</li>
        <li>{props.role}</li>
      </ul>
    </>
  )
}

export default Character
