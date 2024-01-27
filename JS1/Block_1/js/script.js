'use strict';

const numberOfFilms = prompt('How many films you watch?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false,
};

for (let i = 0; i < 2; i++) {
	const movie = prompt('One of the last movies you watched?', ''),
		quantity = prompt('How much would you rate it?', '');

	if (
		movie != null &&
		quantity != null &&
		movie != '' &&
		quantity != '' &&
		movie.length < 50
	) {
		personalMovieDB.movies[movie] = quantity;
	} else {
		i--;
	}
}

if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
	console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('Вы классный зритель');
} else if (personalMovieDB.count > 30) {
	console.log('Вы киноман!');
} else {
	console.log('Произошла ошибка');
}

console.log(personalMovieDB.movies);
