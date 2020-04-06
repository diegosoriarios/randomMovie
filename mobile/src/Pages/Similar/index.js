import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import axios from 'axios'

// import { Container } from './styles';

export default function Similar() {
    const [text, setText] = useState("")
    const [movie, setMovie] = useState({})
  
    async function handleButton() {
        let url = `https://api.themoviedb.org/3/search/movie?api_key=fc9e6d8f685e69fb9398d50821c31f08&language=en-US&query=${text}&page=1&include_adult=true`

        const response = await axios.get(url)
        
        id = response.data.results[0].id
        findSimilar(id)
    }

    async function findSimilar(id) {
        let similarUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=fc9e6d8f685e69fb9398d50821c31f08&language=en-US`

        const response = await axios.get(similarUrl)

        const index = response.data.results.length

        const movie = response.data.results[Math.floor(Math.random() * index)]

        setMovie(movie)
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TextInput 
                value={text}
                onChangeText={text => setText(text)}
                placeholder="Filme"
            />
            <Text>{text}</Text>

            <TouchableOpacity onPress={handleButton}>
                <Text>
                    Search
                </Text>
            </TouchableOpacity>

            {movie &&
                <>
                    <Text>{movie.id}</Text>
                    <Text>{movie.original_title}</Text>
                    <Text>{movie.overview}</Text>
                </>
            }
        </View>
    );
}
 