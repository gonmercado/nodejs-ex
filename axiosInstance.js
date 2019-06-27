const axios = require('axios');

console.log('Creating Axios instance');
const axiosInstance = axios.create({
    baseURL: 'https://comicvine.gamespot.com/api/'
});

module.exports = axiosInstance;
