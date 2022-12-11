import { Request, Response } from 'express';
import movieService from '../services/MovieService';

class MovieController {
    public async main(req: Request, res: Response) {
        const listMovies = await movieService.main();

        return res.json({
            "movies": listMovies
        });
    }

    public async details(req: Request, res: Response) {
        const movieDetails = await movieService.details(req.params.movieId);

        return res.json({
            movieDetails
        });
    }
}

export default new MovieController();