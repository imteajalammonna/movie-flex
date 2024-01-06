import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
    const { title, image, release_date, overview, vote_average, movie_link } = movie;

    return (
        <div id='card'
            className="card md:h-[350px] md:w-[240px] h-[400px] border bg-no-repeat-4 w-[350px] bg-base-100"
            style={{ backgroundImage: `url(${image}) ` }}>

            <div className="text-white text-center mt-32">
                <h2 className="text-xl">{title}</h2>
                <p>{release_date}</p>
                <p>{overview}</p>
                <p>{vote_average}</p>
                <a href={movie_link}
                    target='_blank' rel="noopener noreferrer"
                    className='button-a bottom-0'>Download</a>


            </div>
        </div>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,

}

export default MovieCard;