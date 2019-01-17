import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Chat from './Chat';

const setup = () => {
  const props = {
    messages: []
  }
  Enzyme.configure({ adapter: new Adapter() })
  const enzymeWrapper = mount(<Chat {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Chat', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('.chat').length).toBe(1)
  })
})