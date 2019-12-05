import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieFavouriters from './MovieFavouriters.js';
import NoLikes from './NoLikes.js';

/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Jones',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 3,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

// Tests whether a movie has any likes
function wasMovieLiked(movieID) {
		for (const entry of profiles) {
    		if (entry['favoriteMovieID'] === movieID) {
        		return true
        	}
    	}
  	return false
	}

// Sees whether a movie has any likes, and then renders output 
function movieLikeCheck(MovieFavouriters,NoLikes,movieID) {
  wasMovieLiked(movieID);
  
  if (wasMovieLiked(movieID)) {
  	return <MovieFavouriters profiles = {profiles} users = {users} movieID = {movieID} movies = {movies}/>;
  }
  
  else {
  	return <NoLikes profiles = {profiles} users = {users} movieID = {movieID} movies = {movies}/>
  }
}

// Runs through every movie provided and outputs the correct response  
function outputAllMovies(MovieFavouriters,NoLikes) {
  const movieIDArray = Object.keys(movies)
  movieLikeCheck(MovieFavouriters,NoLikes);
  
  for (const entry of movieIDArray) {
  	movieLikeCheck(MovieFavouriters,NoLikes,entry)
  }
}  
  
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>How Popular is Your Favorite Movie?</h2>
		<MovieFavouriters profiles = {profiles} users = {users} movieID = {'1'} movies = {movies}/>
		<MovieFavouriters profiles = {profiles} users = {users} movieID = {'2'} movies = {movies}/>
		{movieLikeCheck(MovieFavouriters,NoLikes,'1')}
        {movieLikeCheck(MovieFavouriters,NoLikes,'2')}
		{movieLikeCheck(MovieFavouriters,NoLikes,'3')}
        <NoLikes profiles = {profiles} users = {users} movieID = {'3'} movies = {movies}/>
		<MovieFavouriters profiles = {profiles} users = {users} movieID = {'3'} movies = {movies}/>
		{outputAllMovies(MovieFavouriters,NoLikes)}
      </div>
    );
  }
}

export default App;
