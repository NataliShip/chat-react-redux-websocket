import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Rating from './Rating'

const setup = () => {
  const props = {
    users: [{name: 'Я', id: 0}],
    messages: [{message: 'привет имр', author: 'Я'}],
    addUser: jest.fn()
  }
  Enzyme.configure({ adapter: new Adapter() })
  const enzymeWrapper = mount(<Rating {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Rating', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('.rating').length).toBe(1)
  })
})

describe('Rating', () => {
  it('should count messages for users', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('.rating__item').html()).toBe(
      "<span class=\"rating__item\">Я ( 1 )</span>"
    )
  })
})