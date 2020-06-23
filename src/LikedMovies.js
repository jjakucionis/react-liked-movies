import React from 'react';
import MovieBlock from './MovieBlock';

class LikedMovies extends React.Component {
  render() {
    
    const { movies, users, usersByFilm } = this.props;
    
    return (
      Object.keys(movies).map(movie => {
          return (
              <MovieBlock
            	key={movies[movie].name}
            	movieName={movies[movie].name}
                movieId={movies[movie].id}
				usersWhoLiked={usersByFilm[movies[movie].id]}
                users={users}
              />
          )
      })
    )
  }
}

export default LikedMovies