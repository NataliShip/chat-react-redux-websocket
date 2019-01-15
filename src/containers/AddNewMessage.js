import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddNewMessage extends Component {
  sendMessage = (e) => {
    if (e.key === 'Enter') {
      this.props.dispatch(this.input.value, 'Me')
      this.input.value = ''
    }
  }

  render() {
    return (
      <div className='new-message'>
        <input
          onKeyPress={this.sendMessage}
          type='text'
          placeholder='Введите сообщение'
          ref = {(node) => {this.input = node}}
        />
        <button onClick={this.sendMessage}>Отправить</button>
      </div>
    );
  }
}

AddNewMessage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default AddNewMessage;