import React from 'react';
import UserList from './UserList';

class MovieBlock extends React.Component {
  render() {
    const {movieName, usersWhoLiked, users } = this.props;
    let listContent;
    if(!usersWhoLiked) { 
      listContent = (<p>None of the current users liked this movie</p>) }
    else {
     	let usersWhoLikedArr = [];
      	usersWhoLiked.map(user => usersWhoLikedArr.push(users[user].name) )
      	listContent = <UserList users={usersWhoLikedArr} />
    }
  	return (
      <div>
        <h2>{movieName}</h2>
      	{listContent}
      </div>
    )
  }
}

export default MovieBlock