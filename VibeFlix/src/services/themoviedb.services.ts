import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '5d0f46b4a94c3ede13a96da762e916b2',
        language: 'pt-BR'
    }
})

export const getPopularMovie = async () => {
    const response = await api.get('/movie/popular');
    return response.data.results;
}

export const getTopRetadMovie = async () => {
    const response = await api.get('movie/top_rated');
    return response.data.results;
}

export const getLatestMovie = async () => {
    const response = await api.get('movie/now_playing');
    return response.data.results;
}

export const getNext = async () => {
    const response = await api.get('/movie/upcoming');
    return response.data.results;
}

export const getAiring = async () => {
    const response = await api.get('tv/airing_today');
    return response.data.results;
}

export const getAir = async () => {
    const response = await api.get('tv/on_the_air');
    return response.data.results;
}

export const getPopularSeries = async () => {
    const response = await api.get('tv/popular');
    return response.data.results;
}

export const getTopRatedSeries = async () => {
    const response = await api.get('tv/top_rated');
    return response.data.results;
}

