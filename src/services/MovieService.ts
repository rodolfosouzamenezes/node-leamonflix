import MovieRepository from "../repositories/MovieRepository";

class MovieService {
    public async main() {
        const repository = await MovieRepository.main();

        return repository;
    }

    public async details(movieId: string) {
        const repository = await MovieRepository.details(movieId);

        return repository;
    }
}

export default new MovieService();