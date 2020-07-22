const numberOfFilms = +prompt('How many movies have you watched?', '');

let personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const latestFilm1 = prompt('What film have you watched?', ''),
      latestScore1 = prompt('What would you score it?', ''),
      latestFilm2 = prompt('What film have you watched?', ''),
      latestScore2 = prompt('What would you score it?', '');

personalMovieDb.movies[latestFilm1] = latestScore1;
personalMovieDb.movies[latestFilm2] = latestScore2;

console.log(personalMovieDb);