import React from 'react'
import { mount,shallow } from 'enzyme'

import App from '../../client/components/App'
import NavBar from '../../client/components/NavBar'

test('true should be truthy', () => {
  expect(true).toBeTruthy()
})

test('<App /> contains <Container />', () => {
  const wrapper = shallow(<App />)

  expect(wrapper.text()).toMatch('<Container />')
})

test('<App /> contains <NavBar />', () => {
  const wrapper = mount(<App />)
  const actual = wrapper.containsMatchingElement(NavBar)
  expect(actual).toBeTruthy
})
