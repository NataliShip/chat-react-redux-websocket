import React, { Component } from 'react';
import Rating from "./Rating";
import UserList from "./UserList";

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <UserList users={this.props.users}/>
        <Rating users={this.props.users} messages={this.props.messages}/>
      </div>
    );
  }
}

export default Sidebar;