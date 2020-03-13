import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;



export default class LatestMovieReviewsContainer extends Component {
    
    state = {
        reviews:[]
    }

    componentDidMount(){
        fetch(URL)
        .then(resp => resp.json())
        .then(json =>{
            // console.log(json["results"])
            this.setState({
                reviews:json["results"]
            })
        })
    }
    
    componentDidUpdate = (prevState) => {
        prevState.reviews !== this.state.reviews ? this.renderMovies() : console.log("they're not different!")
    }
    
    renderMovies = () => {
        // return <MovieReviews key={this.state.reviews[0].display_title} movie={this.state.reviews[0]} />
        // debugger
        return this.state.reviews.slice(0,3).map((movie) => {
            return <MovieReviews key={movie.display_title} reviews={movie} />
        })
    }
    
    render(){
        return(
            <div
            className="latest-movie-reviews"
            >
                <MovieReviews reviews={this.state.reviews} />
                {/* // {this.renderMovies()} */}
            </div>
        )
    }
}