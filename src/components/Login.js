import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => {
  return (
    <div className='login'>
      <span className='login__header'>Для входа в чат введите имя</span>
      <input
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            props.addUser(e.currentTarget.value)
            e.currentTarget.value = ''
          }
        }}
        className='login__input'
        placeholder='Имя'
        type="text"
      />
    </div>
  )
}

Login.propTypes = {
  addUser: PropTypes.func.isRequired
}
export default Login;