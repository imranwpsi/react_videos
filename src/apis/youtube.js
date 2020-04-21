import axios from 'axios';
const KEY = 'AIzaSyDI0eq9QsWzwh22RXOzL2NCE4aC8GPEqcA';

export const API_DEFAULT_PARAMS = {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
}

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});