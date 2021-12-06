import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const api = axios.create({
    baseURL: "https://rmotaop-movieflix.herokuapp.com/"

})

export const TOKEN = 'Basic ZHNtb3ZpZWZsaXg6ZHNtb3ZpZWZsaXgxMjM='

export async function userToken() {
    const token = AsyncStorage.getItem("@token");
    return token;
}

export async function getMovies() {
    const authToken = await userToken();
    const res = api.get(`/movies?page=0&linesPerPage=999999999&orderBy=title&direction=ASC&genreId=0`,
        {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
    return res;
}

export async function insertReview(movieId : number, text: string) {
    const authToken = await userToken();
    const data = { movieId, text };
    const res = api.post(`/reviews`, data, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    });
    return res;
}

export async function getGenres() {
    const authToken = await userToken();
    const res = api.get(`/genres`,
        {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
    return res;
}

export async function getMovie(id: number) {
    const authToken = await userToken();
    const res = api.get(`/movies/${id}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    });
    return res;
}