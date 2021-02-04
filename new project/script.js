"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const firstLastFilm = prompt('Один из последних просмотренных фильмов?', ''),
    firstFilmRate = prompt('На сколько оцените его?', ''),
    secondLastFilm = prompt('Один из последних просмотренных фиьмов?', ''),
    secondFilmRate = prompt('На сколько оцените его?', '');

personalMovieDB.movies[firstLastFilm] = firstFilmRate;
personalMovieDB.movies[secondLastFilm] = secondFilmRate;

console.log(personalMovieDB);  
