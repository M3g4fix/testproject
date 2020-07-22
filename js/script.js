let numberOfFilms;
let personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


// start();

// rememberMyFilms();

// detectPersonalLevel();
writeYourGenres();
showMyDB();

console.log(personalMovieDb);

function start() {
    numberOfFilms = +prompt('How many movies have you watched?', '');

    while (numberOfFilms == '' || 
    numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt('How many movies have you watched?', '');
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const latestFilm1 = prompt('What film have you watched?', ''),
                latestScore1 = prompt('What would you score it?', '');

        if ( latestFilm1 != null && latestScore1 != null && 
            latestFilm1 != '' && latestScore1 !='' && latestFilm1.length <50){
            personalMovieDb.movies[latestFilm1] = latestScore1;
        } else {
            i--;
        }    
    }
}

function detectPersonalLevel(){
    if (personalMovieDb.count<10){
        console.log('few');
    } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
        console.log('Okai');
    } else if (personalMovieDb.count >= 30) {
        console.log('dofiga');
    } else {
        console.log('error');
    }
}

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDb);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++){
        personalMovieDb.genres[i] = prompt(`your favourite genre no. ${i+1}`, '');
    }
}