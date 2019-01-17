import React, {Component} from 'react';
import PropTypes from 'prop-types';
import setupSocket from '../sockets'
import handleNewMessage from '../sagas'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      showLoginForm: true,
      showError: false
    }
  }

  login = (e) => {
    const {props: {dispatch, addUser, login, saga}} = this
    if (e.key === 'Enter') {
      const username = this.nameInput.value;
      this.setState(username ? {showLoginForm: false} : {showError: true});
      if (username) {
        addUser(username);
        login(username);
        const socket = setupSocket(dispatch, username);
        saga.run(handleNewMessage, {socket, username});
      }
    }
  }

  render() {
    const {state: {showLoginForm, showError}} = this

    return (
      <div>
        {showLoginForm
          ? <div className='login'>
            <span className='login__header'>Для входа в чат введите имя</span>
            <input
              onKeyPress={this.login}
              className='login__input'
              placeholder='Имя'
              type="text"
              ref = {(node) => {this.nameInput = node}}
            />
            {showError
              ? <span className='login__error'>Вы забыли ввести имя</span>
              : null
            }
          </div>
          : null
        }
      </div>
    )
  }
}

Login.propTypes = {
  addUser: PropTypes.func.isRequired
}

export default Login;