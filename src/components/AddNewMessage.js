import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddNewMessage extends Component {
  sendMessage = (e) => {
    const {props: {addMessage, name}} = this;
    if (e.key === 'Enter' || e.type === 'click') {
      addMessage(this.input.value, name);
      this.input.value = ''
    }
  }

  render() {
    return (
      <div className='new-message'>
        <input
          className='new-message__input'
          onKeyPress={this.sendMessage}
          type='text'
          placeholder='Введите сообщение'
          ref = {(node) => {this.input = node}}
        />
        <button
          className='new-message__button'
          onClick={this.sendMessage}
        >
          Отправить
        </button>
      </div>
    );
  }
}

AddNewMessage.propTypes = {
  addMessage: PropTypes.func.isRequired
}

export default AddNewMessage;