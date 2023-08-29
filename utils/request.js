const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/',
    headers: {
        'X-RapidAPI-Key': '3da23fff88mshec1066374ade1d6p11d655jsn50c55b5065dd',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
};

module.exports = async (url) => {
    try {
        const response = await axios.request({ ...options, url: options.url + url });
        return response.data;
    } catch (error) {
        throw error;
    }
}
