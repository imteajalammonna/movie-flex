import { useEffect, useState } from 'react';
import ReactCardSlider from 'react-card-slider-component';
import MovieCard from '../components/MovieCard';

const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('/src/assets/movies.json')
            .then(response => response.json())
            .then(data => setMovies(data))
    }
        , [])
    const slides = [
        { image: "https://picsum.photos/200/300", title: "This is a title", description: "This is a description" },
        { image: "https://picsum.photos/600/500", title: "This is a second title", description: "This is a second description" },
        { image: "https://picsum.photos/700/600", title: "This is a third title", description: "This is a third description" },
        { image: "https://picsum.photos/500/400", title: "This is a fourth title", description: "This is a fourth description" },
        { image: "https://picsum.photos/200/300", title: "This is a fifth title", description: "This is a fifth description" },
        { image: "https://picsum.photos/800/700", title: "This is a sixth title", description: "This is a sixth description" },
        { image: "https://picsum.photos/300/400", title: "This is a seventh title", description: "This is a seventh description" },
        { image: "https://picsum.photos/800/700", title: "This is a sixth title", description: "This is a sixth description" },
        { image: "https://picsum.photos/300/400", title: "This is a seventh title", description: "This is a seventh description" },
        { image: "https://picsum.photos/800/700", title: "This is a sixth title", description: "This is a sixth description" },
        { image: "https://picsum.photos/300/400", title: "This is a seventh title", description: "This is a seventh description" },
        { image: "https://picsum.photos/800/700", title: "This is a sixth title", description: "This is a sixth description" },
        { image: "https://picsum.photos/300/400", title: "This is a seventh title", description: "This is a seventh description" },
        { image: "https://picsum.photos/800/700", title: "This is a sixth title", description: "This is a sixth description" },
        { image: "https://picsum.photos/300/400", title: "This is a seventh title", description: "This is a seventh description" },
        { image: "https://picsum.photos/800/700", title: "This is a sixth title", description: "This is a sixth description" },
        { image: "https://picsum.photos/300/400", title: "This is a seventh title", description: "This is a seventh description" },
    ]

    return (
        <div className='container mx-auto min-h-screen mt-32'>

            <ReactCardSlider slides={slides} />

            <div className="grid grid-cols-6 gap-4">
                {
                    movies.map(movie => <MovieCard key={movie.id} movie={movie} ></MovieCard>)
                }
            </div>
        </div>
    );
};

export default Home;