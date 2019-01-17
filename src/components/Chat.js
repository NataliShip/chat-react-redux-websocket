import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

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