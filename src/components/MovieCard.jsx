import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
    const { title, image, release_date, overview, vote_average } = movie;

    return (
        <div id='card' className="card h-[350px] w-[240px] border bg-no-repeat  bg-base-100" style={{ backgroundImage: `url(${image})` }}>

            <div className="text-white text-center">
                <h2 className="text-xl">{title}</h2>
                <p>{release_date}</p>
                <p>{overview}</p>
                <p>{vote_average}</p>
                <a href="https://direct-dl.lol/dd/?file=AF1QipOoC2eK5Z4zxtst8Ip-sWxQvA4sOCWhn3kaGnZi"
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