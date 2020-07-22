let personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDb.count = +prompt('How many movies have you watched?', '');
        while (personalMovieDb.count == '' ||
            personalMovieDb.count == null || isNaN(personalMovieDb.count)) {
            personalMovieDb.count = +prompt('How many movies have you watched?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const latestFilm1 = prompt('What film have you watched?', ''),
                latestScore1 = prompt('What would you score it?', '');

            if (latestFilm1 != null && latestScore1 != null &&
                latestFilm1 != '' && latestScore1 != '' && latestFilm1.length < 50) {
                personalMovieDb.movies[latestFilm1] = latestScore1;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDb.count < 10) {
            console.log('few');
        } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
            console.log('Okai');
        } else if (personalMovieDb.count >= 30) {
            console.log('dofiga');
        } else {
            console.log('error');
        }
    },
    showMyDB: function () {
        if (!personalMovieDb.private) {
            console.log(personalMovieDb);
        }
    },

    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`your favourite genre no. ${i+1}`, '');
            if (genre == null ||
                genre == '') {
                i--;
            } else {
                personalMovieDb.genres[i] = genre;
            }
        }
        personalMovieDb.genres.forEach((value, index) => {
            console.log(`Favourite genre #${index+1} is ${value}`);
        });
    },

    toggleVisibleMyDB: function () {
        personalMovieDb.private = !personalMovieDb.private;
    }
};


// personalMovieDb.start();
// personalMovieDb.rememberMyFilms();
// personalMovieDb.detectPersonalLevel();
personalMovieDb.writeYourGenres();
personalMovieDb.showMyDB();
personalMovieDb.toggleVisibleMyDB();
personalMovieDb.showMyDB();