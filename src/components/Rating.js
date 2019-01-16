import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const {props:{users, messages}} = this

    let rating = {};
    users.forEach(user => {
      let count = 0;
      messages.forEach(mes => {
        if (mes.author.toString() === user.name.toString()) {
          count++
          rating[user.name] = count;
        }
      })
    })
    let sorted = [];
    for (let item in rating) {
      sorted.push([item, rating[item]]);
    }

    sorted.sort((a, b) => {
      return b[1] - a[1];
    });

    return (
      <div className="rating">
        <h3 className="rating__header">Рейтинг по количеству сообщений:</h3>
        <ul className='rating__list'>
          {sorted.map(user => (
            <span className='rating__item' key={user[0]}>
              {user[0]} ( {user[1] ? user[1] : 0} )
            </span>
          ))}
        </ul>
      </div>
    );
  }
}

export default Rating;