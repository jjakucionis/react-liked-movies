import React from 'react';

class UserList extends React.Component {
	
  render() {
    const { users } = this.props;
  	return (
      <div>
        <p>Liked By:</p>
        <ul>
          {users.map(user => 
               <li key={user}>{user}</li>
          )}
        </ul>
	  </div>
    )
  }
}

export default UserList