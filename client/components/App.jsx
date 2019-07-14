import React from 'react'
import NavBar from './NavBar'
import Facts from './Facts'
import { Container } from 'semantic-ui-react';

const App = () =>{
  return (
    <>
    <Container>
      <NavBar />
      <Facts />
    </Container>
    </>
  )
}

export default App
