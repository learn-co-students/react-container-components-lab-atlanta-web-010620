import React from 'react' 

const MovieReviews = (props) => {
    return(
        <div 
            className="review-list"
        >
            {props.reviews.map((movie) => {
                // console.log(movie)

                return <div className="review" key={movie.display_title}>
                        <p>{movie.display_title}</p>
                        <p>{movie.mpaa_rating}</p>
                        <p>{movie.summary_short}</p>
                    </div>
            })}
        </div>
    )
}
MovieReviews.defaultProps = {
    reviews: []
};
export default MovieReviews