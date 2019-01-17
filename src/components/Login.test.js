import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './Login';

const setup = () => {
  const props = {
    addUser: jest.fn()
  }
  Enzyme.configure({ adapter: new Adapter() })
  const enzymeWrapper = mount(<Login {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('login', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('.login').length).toBe(1)
  })
})