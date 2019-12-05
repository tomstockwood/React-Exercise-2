// Takes the ID of a movie and returns its name
function getMovieName(movieID) {
  return this.props.movies[movieID]['name'];
}

export default getMovieName