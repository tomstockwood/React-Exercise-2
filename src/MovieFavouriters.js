import React, { Component} from 'react'

class MovieFavouriters extends Component {
  
  // Function to identify all users who like a given movie
  getWhoLikesAMovie(movieID) {
    let likers = []; // An array where we will store all the usernames of those who like the movie
    
    for (const entry of this.props.profiles) {
    	if (entry['favoriteMovieID'] === movieID) {
        	let username = this.getUserNameFromID(entry['userID']) // Stores the username of the user who likes the movie
          	likers.push(username)
        
        }
    }
    return this.giveArrayEntries(likers) // list of names of who likes a given movie
  }
  
  // Outputs all the entries in an array as a list in HTML
  giveArrayEntries(inputArray) {
  	return (
    	<ul>
      		{inputArray.map(function(entry,index){
    			return <li key = { index }> {entry} </li> //Returns a list of all the entries in a given array
    		}
    		)}
    	</ul>
    )}
  
	getUserNameFromID(ID) {
      return this.props.users[ID]['name']; // Gives the name of a user from their ID
    }

	getMovieName(movieID) {
  return this.props.movies[movieID]['name']; // Gives the name of a movie from its ID
	}

  render() {   
    
    
    return (
      <div>
      	<h3 className = 'movie-title'>{this.getMovieName(this.props.movieID)} </h3>
      	<p> Liked by: </p>
		{this.getWhoLikesAMovie(this.props.movieID)}
      </div>
    	
      
    )
  
  }

}

export default MovieFavouriters