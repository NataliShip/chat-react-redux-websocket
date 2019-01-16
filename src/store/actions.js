import * as types from './actionTypes';

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author,
  time: getTime()
})

export const addUser = name => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name
})

export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author,
  time: getTime()
})

export const popularUsersList = users => ({
  type: types.USERS_LIST,
  users
})

export function getTime() {
  let date = new Date();
  let time = [date.getHours(), date.getMinutes(), date.getSeconds()].map(function (x) {
    return x < 10 ? '0' + x : x
  }).join(':');
  return time;
}