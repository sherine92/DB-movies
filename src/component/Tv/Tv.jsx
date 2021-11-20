import React, { Component } from 'react'
import axios from "axios"

export default class Tv extends Component {
    state = { Tv: [] }
    getTv = async () => {
        let { data } = await axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=52bbcddeda849047525b51d6f8a12361')
        console.log(data.results);

        this.setState({
            Tv: data.results

        })

    }
    componentDidMount() {
        this.getTv()
    }

    render() {

        return (
            <>
                <div className="container my-5">
                    <div className="row">

                        {this.state.Tv.map((value, index) => {
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
