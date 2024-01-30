'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('How many films you watch?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('How many films you watch?', '');
	}
}

start();

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

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классный зритель');
	} else if (personalMovieDB.count > 30) {
		console.log('Вы киноман!');
	} else {
		console.log('Произошла ошибка');
	}
}

detectPersonalLevel();

function showMyDB() {
	if (personalMovieDB.private === false) {
		console.log(personalMovieDB);
	}
}

showMyDB();

function writeYorGenres() {
	for (let i = 1; i < 4; i++) {
		const genreQuestion = prompt(`What genre is your favorite number ${i}`);
		personalMovieDB.genres.push(genreQuestion);
	}
}

writeYorGenres();
