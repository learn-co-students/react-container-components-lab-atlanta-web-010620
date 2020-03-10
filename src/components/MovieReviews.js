// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => { 



        return (
            <div className='review-list'>
                {props.reviews.map(review => {
                    return <h1 className='review'>{review.headline}</h1>
                })}
            </div>
        )

}

export default MovieReviews