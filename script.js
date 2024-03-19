// Sample movie data
import { movies } from './data.js';

// const movies = [
//     {
//         title: 'Spiderman No Way Home',
//         poster: 'img/SpidermanNoWayHome.jpg',
//         genre: 'Action',
//         videoUrl: 'https://vidsrc.xyz/embed/movie/tt10872600'
//     },
//     {
//         title: 'Movie 2',
//         poster: 'https://via.placeholder.com/200x300',
//         genre: 'Comedy',
//         videoUrl: 'https://example.com/movie2.mp4'
//     },
//     {
//         title: 'Movie 3',
//         poster: 'https://via.placeholder.com/200x300',
//         genre: 'Drama',
//         videoUrl: 'https://example.com/movie3.mp4'
//     }
// ];

// Function to render movie cards
function renderMovieCards(movies) {
    const movieListElement = document.querySelector('.movie-list');
    movieListElement.innerHTML = '';

    movies.forEach((movie, index) => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.dataset.movieId = index; // Add a unique identifier for each movie

        const poster = document.createElement('img');
        poster.src = movie.poster;
        poster.alt = movie.title;

        const title = document.createElement('h3');
        title.textContent = movie.title;

        movieCard.appendChild(poster);
        movieCard.appendChild(title);

        movieListElement.appendChild(movieCard);
    });

    // Add click event listener to movie cards
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        card.addEventListener('click', handleMovieCardClick);
    });
}

// Function to handle movie card click
function handleMovieCardClick(event) {
    const movieId = event.currentTarget.dataset.movieId;
    const selectedMovie = movies[movieId];

    // Navigate to the movie page
    window.location.href = `movie.html?movieId=${movieId}&movies=${encodeURIComponent(JSON.stringify(movies))}`;
}

// Render featured movies on page load
renderMovieCards(movies);