import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Message from './Message'

const setup = () => {
  const props = {
    author: 'Я',
    time: '19:00',
    message: 'какой-нибудь текст'
  }
  Enzyme.configure({ adapter: new Adapter() })
  const enzymeWrapper = mount(<Message {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Message', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('p').html()).toBe(
      "<p class=\"message\"><i class=\"message__time\">19:00</i> <i class=\"message__author\">Я</i>: какой-нибудь текст</p>"
    )
  })
})