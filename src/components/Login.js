import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      showLoginForm: true,
      showError: false
    }
  }

  login = (e) => {
    if (e.key === 'Enter') {
      this.setState(this.nameInput.value ? {showLoginForm: false} : {showError: true});
      if (this.nameInput.value) {
        this.props.addUser(this.nameInput.value);
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