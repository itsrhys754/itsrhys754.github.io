// Get the movieId from the URL query string
import { movies } from './data.js';


// Get the movieId and movies from the URL query string
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('movieId');
const moviesJson = urlParams.get('movies');
const movies = JSON.parse(decodeURIComponent(moviesJson));

// Fetch the movie data based on the movieId
const selectedMovie = movies[movieId];


// Render the movie player and additional information
function renderMoviePlayer() {
    const moviePlayerElement = document.getElementById('movie-player');

    // Create a video element
    const videoPlayer = document.createElement('video');
    videoPlayer.src = selectedMovie.videoUrl;
    videoPlayer.controls = true;

    moviePlayerElement.appendChild(videoPlayer);

    // Add additional movie information (e.g., title, description, etc.)
    // ...
}

renderMoviePlayer();