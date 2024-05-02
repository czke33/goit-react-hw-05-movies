
import axios from 'axios';

const API_KEY = '714c3120d8fef346bdc59740f67d43e6';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function getHomeMovies() {
    const response = await axios.get('/trending/movie/week', {
        params: {
            api_key: API_KEY,
            language: 'en-US',
            sort_by: 'popularity.desc',
            page: 1
        }
    });
    return response.data;
}
export async function getMovieByName(query, page) {
    const response = await axios.get('/search/movie', {
        params: {
            api_key: API_KEY,
            language: 'en-US',
            query: query,
            page: page
        }
    });
    return response.data;
}

export async function getMovieDetalis(id) {
    const response = await axios.get('/movie/' + id, {
        params: {
            api_key: API_KEY,
            language: 'en-US'
        }
    });
    return response.data;
}
export async function getMovieCast(id) {
    const response = await axios.get('/movie/' + id + '/credits', {
        params: {
            api_key: API_KEY,
            language: 'en-US'
        }
    });
    return response.data;
}
export async function getMovieReviews(id) {
    const response = await axios.get('/movie/' + id + '/reviews', {
        params: {
            api_key: API_KEY,
            language: 'en-US'
        }
    });
    return response.data;
}

export async function getMovieTrailer(id) {
    const response = await axios.get('/movie/' + id + '/videos', {
        params: {
            api_key: API_KEY,
            language: 'en-US'
        }
    });
    return response.data;
}