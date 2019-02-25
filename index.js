const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://news.ycombinator.com';


axios.get(url)
  .then(response => {
    // let html = response.data;
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  })