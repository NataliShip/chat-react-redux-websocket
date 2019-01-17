import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import AddNewMessage from './AddNewMessage'

const setup = () => {
  const props = {
    users: [],
    addMessage: jest.fn()
  }
  Enzyme.configure({ adapter: new Adapter() })
  const enzymeWrapper = mount(<AddNewMessage {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('AddNewMessage', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('.new-message').length).toBe(1)
  })
})