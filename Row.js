import React, { useState, useEffect } from "react";
import axios from "axios";
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer'


const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    // alert(fetchUrl);

    // A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    // console.table(movies);
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        }
        else {
            movieTrailer(movie?.title || "")
                .then(url => {
                    // alert(url);
                    // const urlParams = new URLSearchParams(new URL(url).Search);
                    // setTrailerUrl(urlParams.get('v'));

                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                    // alert(urlParams.get('v'));
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {
                    movies.map((movie) =>
                        <img key={movie.id}
                            onClick={() => handleClick(movie)}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name} />
                        //    <h2>{movie.title}</h2>
                    )}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}
export default Row;



