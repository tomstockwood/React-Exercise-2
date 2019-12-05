import React, { Component} from 'react'

class MovieFavouriters extends Component {
  
  
  getWhoLikesAMovie(ID) {
    let likers = []; // An array where we will store all the user IDs of those who like the movie
    
    for (const entry of this.props.profiles) {
    	if (entry['favoriteMovieID'] === ID) {
        	likers.push(entry['userID'])
        
        }
    }
    return this.giveArrayEntries(likers) // list of ids of who likes a given movie
  }
  
  giveArrayEntries(Array) {
  	return (
    	<ul>
      		{Array.map(function(entry,index){
    			return <li key = { index }> {entry} </li> //Returns a list of all the entries in a given array
    		}
    		)}
    	</ul>
    )
  }
  
	getUserNameFromID(ID) {
      return this.props.users[ID]['name']
    }

  render() {   
    const movieIDs = Object.keys(this.props.movies)
    
    
    return (
      <div>
      	<h3 className = 'movie-favouriters'>{this.props.movieName} </h3>
      	<p> Liked by: </p>
		<p> {this.props.movies[1]['id']} </p>
		{this.props.movies[1]['id']}
		{this.giveArrayEntries(movieIDs)}
		<ul> { movieIDs } </ul>
		{this.getWhoLikesAMovie('5')}
		
      </div>
    	
      
    )
  
  }

}

export default MovieFavouriters