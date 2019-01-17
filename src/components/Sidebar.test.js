import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sidebar from './Sidebar';

const setup = () => {
  const props = {
    messages: [],
    users: []
  }
  Enzyme.configure({ adapter: new Adapter() })
  const enzymeWrapper = mount(<Sidebar {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Sidebar', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('.sidebar').length).toBe(1)
  })
})