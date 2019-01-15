import React, { Component } from 'react';
import Rating from "./Rating";
import UserList from "./UserList";

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <UserList users={this.props.users}/>
        <Rating/>
      </div>
    );
  }
}

export default Sidebar;