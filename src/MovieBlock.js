import React from 'react';

class MovieBlock extends React.Component {
  
  render() {
    const movieID = this.props.movieID;
    const movieName = this.props.movieName;
    const users = this.props.users;
    const profiles = this.props.profiles;
  	return (
      <div>
        <h2>{movieName}</h2>
        <p>Liked By:</p>
        <ul>
  		  {profiles.filter(profile => +profile.favoriteMovieID === movieID).map(user => {
             return (
               <li key={movieID + '-' + users[user.userID].id + '-' + users[user.userID].name}>
                  {users[user.userID].name}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default MovieBlock