import React, { Component } from 'react';
import PropTypes from "prop-types";

class UserList extends Component {
  render() {
    const {props:{users}} = this

    return (
      <div className='user-list'>
        <h3 className='user-list__header'>Список подключенных пользователей:</h3>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
}

export default UserList;