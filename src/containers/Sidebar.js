import React, { Component } from 'react';
import Rating from "../components/Rating";
import UserList from "../components/UserList";

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <UserList/>
        <Rating/>
      </div>
    );
  }
}

export default Sidebar;