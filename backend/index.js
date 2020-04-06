const config = require('./config')
const Twit = require('twit')
const axios = require('axios')

const getRecommendedMovie = async () => {
    const tmdbApiKey = config.movies_database_api_key
    const listPage = Math.floor(Math.random() * 234) + 1
    const minimumVotes = 50
    const minimumScore = 7
    const requestURL = 
        `https://api.themoviedb.org/3/discover/movie?api_key=${tmdbApiKey}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=${listPage}&vote_count.gte=${minimumVotes}&vote_average.gte=${minimumScore}`
    
    const recommendedMovie = await axios
        .get(requestURL)
        .then(response => {
            if (response.status === 200) {
                const moviesList = response.data.results
                const listLength = moviesList.length
                const randomIndex = Math.floor(Math.random() * listLength) + 1

                const recommendedMovie = moviesList[randomIndex]

                const movieID = recommendedMovie.id
                const movieTitle = recommendedMovie.title
                const movieReleaseYear = recommendedMovie.release_date.split('-')[0]
                const movieURL = 'https://www.themoviedb.org/movie/' + movieID

                const tweet = `today you could watch ${movieTitle} (${movieReleaseYear}). More info: ${movieURL}` 
                return tweet
            }
        })
        .catch(() => ' seems like something went wrong 💔. Try again in a few minutes!')
    
    return recommendedMovie
}

const bot = new Twit(config.twitter_api)
const myAccountId = config.twitter_user_id

const stream = bot.stream('statuses/filter', { follow: myAccountId })

stream.on('tweet', async (eventMsg) => {
    if (eventMsg.in_reply_to_screen_name === 'nosequever') {
        const userToMention = eventMsg.user.screen_name
        const toTweet = `@${userToMention} ${await getRecommendedMovie()}`
        const tweetParam = {
            status: toTweet,
            in_reply_to_status_id: eventMsg.id_str
        }

        bot.post('statuses/update', tweetParams)
    }
})