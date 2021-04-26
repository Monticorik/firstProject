"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотренно довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы класический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    detectPersonalLevel: function () {
        for(let i = 1; i < 3; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
            if (a != null && b != null && a != "" && b != "" && a.length <50) {
                personalMovieDB.movies[a] = b; 
            } else {
                console.log('error');
                i--;
            }
            
        }
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
        
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log (personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre == null || genre == "") {
                console.log("Введите жанр");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
    
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i+1} - это ${item};`);
        });
    }
};
