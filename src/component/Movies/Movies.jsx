import React, { Component } from 'react'
import axios from "axios"

export default class Movies extends Component {
    state = { Movies: [] }
    getMovies = async () => {
        let { data } = await axios.get('https://api.themoviedb.org/3/trending/movies/day?api_key=52bbcddeda849047525b51d6f8a12361')
        console.log(data.results);

        this.setState({
            Movies: data.results

        })

    }
    componentDidMount() {
        this.getMovies()
    }

    render() {

        return (
            <>
                <div className="container my-5">
                    <div className="row">

                        {this.state.Movies.map((value, index) => {
                            return (
                                <div key={index} className="col-md-2">
                                    <div className="item">
                                        <img className="w-100" src={'https://image.tmdb.org/t/p/original' + value.poster_path} alt="" />
                                        <h4>{value.name} {value.title}</h4>
                                        <span className="vote">{value.vote_average}</span>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </>
        )
    }
}
