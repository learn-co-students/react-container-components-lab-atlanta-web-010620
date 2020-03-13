import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm:"",
        reviews:[]
    }

    onSearchType = (e) =>{
        e.preventDefault(); 
        // console.log(e.target.value)
        this.setState({
            searchTerm:e.target.value
        })
    }

    onSearchSubmit = (e) => {
        e.preventDefault(); 
        console.log(this.state.searchTerm)
        // debugger
        fetch(`${URL}&query=${this.state.searchTerm}`)
        .then(resp=>resp.json()) 
        .then(json => this.setState({
                reviews:json["results"]
            }))
            // <MovieReviews movies={this.state.reviews.slice(0,3)} />
    }

    render(){
        return(
            <div>

            <form
                className="searchable-movie-reviews"
                onSubmit={this.onSearchSubmit}
                >
                <input
                name="movieSearch"
                placeholder="placeholder"
                onChange={this.onSearchType}
                > 
                </input>
                
            </form>
                {this.state.reviews !== [] ? <MovieReviews reviews={this.state.reviews} /> : null}
                
                </div>
        )
    }
}