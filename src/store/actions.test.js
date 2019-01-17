import { addMessage, addUser } from './actions';
import * as types from './actionTypes';

export function getTime() {
  let date = new Date();
  let time = [date.getHours(), date.getMinutes()].map(x => {
    return x < 10 ? `0${x}` : x
  }).join(':');
  return time;
}

describe('adding a message', () => {
  it('should create an action to add a message with id 0', () => {
    const message = 'привет, как дела?'
    const author = 'Петя'
    const action = {
      type: types.ADD_MESSAGE,
      message,
      author,
      time: getTime(),
      id: 0
    }
    expect(addMessage(message, author)).toEqual(action)
  })
})

describe('adding a second message', () => {
  it('should create an action to add a message with id 1', () => {
    const message = 'Привет всем!'
    const author = 'Вася'
    const action = {
      type: types.ADD_MESSAGE,
      message,
      author,
      time: getTime(),
      id: 1
    }
    expect(addMessage(message, author)).toEqual(action)
  })
})

describe('adding a user', () => {
  it('should create an action to add a user with id 0', () => {
    const user = 'Ваня'
    const action = {
      type: types.ADD_USER,
      name: user,
      id: 0
    }
    expect(addUser(user)).toEqual(action)
  })
})

describe('adding a second user', () => {
  it('should create an action to add a message with id 1', () => {
    const user = 'Маша'
    const action = {
      type: types.ADD_USER,
      name: user,
      id: 1
    }
    expect(addUser(user)).toEqual(action)
  })
})