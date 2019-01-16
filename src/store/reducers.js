import * as types from './actionTypes';

export function messages(state = [], action) {
  switch (action.type) {
    case types.ADD_MESSAGE:
    case types.MESSAGE_RECEIVED:
      return state.concat([
        {
          message: action.message,
          author: action.author,
          id: action.id,
          time: action.time,
        }
      ])
    default:
      return state;
  }
}

export function users(state = [], action) {
  switch (action.type) {
    case types.ADD_USER:
      return state.concat([
        { name: action.name, id: action.id }
      ])
    case types.USERS_LIST:
      return action.users
    default:
      return state;
  }
}

export function login(state = '', action) {
  switch (action.type) {
    case types.LOGIN:
      return action.name
    default:
      return state;
  }
}