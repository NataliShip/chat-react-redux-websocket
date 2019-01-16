import React from 'react';
import PropTypes from 'prop-types';

const Message = ({message, author, time}) => {
  return (
    <p className='message'>
      <i className='message__time'>{time}</i> <i className='message__author'>{author}</i>: {message}
    </p>
  )
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
}

export default Message;