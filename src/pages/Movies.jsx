import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
// import { useParams } from 'react-router-dom';





const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [moviesLength, setMoviesLength] = useState(12);


    // const {id  } = useParams();
    // console.log(id);
    useEffect(() => {
        fetch('/movies.json')
            .then(response => response.json())
            .then(data => setMovies(data))
    }
        , []);
    return (
        <div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 place-items-center md:mx-2 lg:mx-3 ">
                {
                    movies.slice(0, moviesLength).map(movie => <MovieCard key={movie.id} movie={movie} ></MovieCard>)
                }
            </div>
            <div className={`flex items-center justify-center mt-6  ${moviesLength=== movies.length && "hidden"}`}>
                <button
                    onClick={() => setMoviesLength(movies.length)}
                    className="button">View All Movies
                </button>
            </div>
        </div>
    );
};

export default Movies;