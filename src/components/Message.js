import React from 'react';
import PropTypes from 'prop-types';
import AddNewMessage from "../containers/AddNewMessage";

const Message = ({message, author}) => {
  return (
    <p>
      <i>{author}</i>: {message}
    </p>
  )
}

AddNewMessage.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default Message;