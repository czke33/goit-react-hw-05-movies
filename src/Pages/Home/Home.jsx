import React from 'react';
import style from "./Home.module.css"
import MovieList from 'components/MovieList/MovieList';
import Box from 'Helpers/Box/Box';

const Home = () => {
    return (
        <div className={style.home}>
            <Box>
                <h1 className={style.title}>Welcome to Movie App! These are the trending movies of the week</h1>
                <MovieList />
            </Box>
            
        </div>
    )
};

export default Home;