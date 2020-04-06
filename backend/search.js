const config = require('./config')
const Twit = require('twit')
const axios = require('axios')

let id

async function search(movie) {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=fc9e6d8f685e69fb9398d50821c31f08&language=en-US&query=${movie}&page=1&include_adult=true`

    const response = await axios.get(url)
    
    id = response.data.results[0].id
    findSimilar(id)
}

async function findSimilar(id) {
    //https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=fc9e6d8f685e69fb9398d50821c31f08&language=en-US&page=1
    let similarUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=fc9e6d8f685e69fb9398d50821c31f08&language=en-US`

    const response = await axios.get(similarUrl)

    const index = response.data.results.length

    console.log(response.data.results[Math.floor(Math.random() * index)])
}

search('Argo')