import React, { Component } from 'react'
import axios from "axios"
export default class Home extends Component {

    state = { movies: [], tv: [] }
    getAllshows = async (mediaType) => {

        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=52bbcddeda849047525b51d6f8a12361`)
        console.log(data.results);

        this.setState({ [mediaType]: data.results })

    }
    componentDidMount() {
        this.getAllshows('movies')
        this.getAllshows('tv')

    }

    render() {

        return (
            <>
                <div className="container my-5">
                    <div className="row">
                        <div className="col md-5">
                            <div className="brdr w-25"></div>
                            <div className="item">
                                <h1 className="pt-3">Trending <br />movies<br /> to watch now</h1>
                                <p className="secondFont pt-4">most watching movies of the day</p>
                            </div>
                            <div className="brdr w-100"></div>
                        </div>
                        {this.state.movies.slice(0, 10).map((value, index) => {
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
                    <div className="row pt-5">
                        <div className="col md-5">
                            <div className="brdr w-25"></div>
                            <div className="item">
                                <h1 className="pt-3">Trending <br />movies<br /> to watch now</h1>
                                <p className="secondFont pt-4">most watching movies of the day</p>
                            </div>
                            <div className="brdr w-100"></div>
                        </div>
                        {this.state.tv.slice(0, 10).map((value, index) => {
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
