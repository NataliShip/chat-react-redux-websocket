import React, { Component } from 'react';
import RegisterButton from './RegisterButton';

class Rating extends Component {
  render() {
    return (
      <div className="rating">
        <RegisterButton />
        <h3 className="rating__header">Рейтинг по количеству сообщений:</h3>
      </div>
    );
  }
}

export default Rating;