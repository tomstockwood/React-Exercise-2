import React, { Component} from 'react'

class NoLikes extends Component {
	
  getMovieName(movieID) {
  return this.props.movies[movieID]['name']; // Gives the name of a movie from its ID
	}
  
  render() {
      return (
      	<div>
        	<h3 className = 'movie-title'>{this.getMovieName(this.props.movieID)} </h3>
			<p> No one liked this movie </p>
        </div>
      )
    }
}

export default NoLikes