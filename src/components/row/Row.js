import React, { useEffect, useState } from 'react'
import './Row.css'
import { instance } from './../../config';

export default function Home({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])

    const base_url = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await instance.get(fetchUrl)
            setMovies(res.data.results)

        }
        fetchMovies()
    }, [fetchUrl])

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='rowPosters'>
                {movies?.map(movie => (
                    <img src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} key={movie.id} alt=""
                        className={`${!isLargeRow ? "rowPosterLarge" : "rowPoster"}`}></img>
                ))}
            </div>
        </div>
    )
}
