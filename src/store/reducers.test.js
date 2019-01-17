import { messages, users, login } from './reducers';
import * as types from './actionTypes';

describe('Messages reducer', () => {
  it('should return the initial state, empty', () => {
    expect(messages(undefined, {})).toEqual([])
  })

  it('should handle ADD_MESSAGE and store every message', () => {
    expect(messages([], {
      type: types.ADD_MESSAGE,
      message: 'Привет',
      author: 'Я'
    })).toEqual([
      {
        message: 'Привет',
        author: 'Я'
      }
    ])

    expect(messages(
      [
        {
          message: 'Привет',
          author: 'Я'
        }
      ],
      {
        type: types.ADD_MESSAGE,
        message: 'и тебе привет',
        author: 'Вася'
      }
    )).toEqual([
      {
        message: 'Привет',
        author: 'Я'
      },
      {
        message: 'и тебе привет',
        author: 'Вася'
      }
    ])
  })
})

describe('Users reducer', () => {
  it('should return the initial state, empty', () => {
    expect(users(undefined, {})).toEqual([])
  })

  it('should handle ADD_USER and store every user', () => {
    expect(
      users([], {
        type: types.ADD_USER,
        name: 'Петя'
      })
    ).toEqual([
      {
        name: 'Петя'
      }
    ])

    expect(
      users(
        [
          {
            name: 'Миша',
          }
        ],
        {
          type: types.ADD_USER,
          name: 'Толя'
        }
      )
    ).toEqual([
      {
        name: 'Миша',
      },
      {
        name: 'Толя'
      }
    ])
  })
})

describe('Login reducer', () => {
  it('should handle LOGIN and store name', () => {
    expect(
      login('', {
        type: types.LOGIN,
        name: 'Саша'
      })
    ).toEqual('Саша')

  })
})