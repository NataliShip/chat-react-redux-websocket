import React, { Component } from 'react';
import Message from './Message';
import PropTypes from 'prop-types';

class Chat extends Component {
  render() {
    const {props:{messages}} = this
    return (
      <div className="chat">
        <ul>
          {messages.map(message => (
            <Message
              key={message.id}
              {...message}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Chat.propTypes = {
  messages: PropTypes.array.isRequired
}

export default Chat;