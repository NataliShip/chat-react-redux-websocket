import React, { Component } from 'react';

class AddNewMessage extends Component {
  render() {
    return (
      <div className='new-message'>
        <input type='text' placeholder='введите сообщение'/>
        <button>Отправить</button>
      </div>
    );
  }
}

export default AddNewMessage;