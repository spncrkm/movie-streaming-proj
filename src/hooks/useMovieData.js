import { useEffect, useState } from "react";
import axios from 'axios';

export const useMovieData = () => {

    const [movieData, setMovieData] = useState({});

    // use your API Read Access Token!!!
    const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzAwMDVjYzc5NTAyZTQ0OTgzMTRmMzg1MDRlNzBlMyIsIm5iZiI6MTcxOTI1NjM5NC44Mjc4MzksInN1YiI6IjY2NzljNDQwOTkyMGVjYWZhYTU3MjgyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JtXEWcFJTclFlwg2nQjnVRcZ0axxVT1cTcMlbFAQVXc"
    
    useEffect(() => {
        const fetchMovieData  = async () => {
            const movieId = Math.floor(Math.random()*1000)
            

            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`,{
                    headers: {
                        // application/json specifies that we're working with JSON data
                        accept: 'application/json',
                        // takes in a token/apikey to validate our request
                        Authorization: `Bearer ${apiKey}`
                    }
                })
                setMovieData(response.data)
            } catch (error) {
                console.log('Error fetching movie data: ', error);
            }

        };
        fetchMovieData();
    },[]) //empty dependency array so useEffect function will only run on initial render

    return { movieData }
};

