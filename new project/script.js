"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert("Просмотренно довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы класический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    // alert("Произошла ошибка");
    console.log("Произошла ошибка");
}


for(let i = 1; i < 3; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    // if (a === null || b === null) {
    //     alert('Никаких отмен. играем до конца');
    //     i = 0;
    //     continue;
    // } else if (a.length > 50 || b.length > 50) {
    //     alert('Слишком большое значение');
    //     i = 0;
    //     continue;
    // }  else if (a == "" || b == "") {
    //     alert('Введите ответ');
    //     i = 0;
    //     continue;
    // }

    if (a != null && b != null && a != "" && b != "" && a.length <50) {
        personalMovieDB.movies[a] = b; 
    } else {
        console.log('error');
        i--;
    }
    
}

console.log(personalMovieDB);  
