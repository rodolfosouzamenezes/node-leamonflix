import fs from 'fs';

class MovieRepository {
    public async main() {
        const moviesList = fs.readFileSync('./DB/movies.json', 'utf-8');

        const objMovies = JSON.parse(moviesList);

        return objMovies;
    }

    public async details(movieId: string) {
        const movieDetails = fs.readFileSync(`./DB/movies/${movieId}.json`, 'utf-8');

        const objMovieDetails = JSON.parse(movieDetails);

        return objMovieDetails;
    }
}

export default new MovieRepository();