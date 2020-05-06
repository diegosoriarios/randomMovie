import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import axios from 'axios'

// import { Container } from './styles';

export default function Similar() {
    const [text, setText] = useState("")
    const [movie, setMovie] = useState({})
    const [image, setImage] = useState('https://www.bauducco.com.br/wp-content/uploads/2017/09/default-placeholder-1-2.png')
  
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

        setImage(`https://image.tmdb.org/t/p/w500${movie.poster_path}`)
        setMovie(movie)
    }

    if (movie.original_title == undefined){
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

            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Image source={{ uri: image }} style={styles.image} />
                <View style={styles.box}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{movie.original_title}</Text>
                        <TouchableOpacity style={styles.likeBtn}>
                            <Text style={{ color: "#fff" }}>❤︎</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.description}>{movie.overview}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
        //position: 'absolute',
        top: 0,
        left: 0
    },
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: "center",
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 20,
        width: '60%'
    },
    description: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'justify'
    },
    header: {
        flexDirection: 'row'
    },
    box: {
        position: 'relative',
        width: '90%',
        //height: 250,
        backgroundColor: "#000",
        zIndex: 2,
        marginTop: -50,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    likeBtn: {
        backgroundColor: "#444",
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 50,
        position: 'absolute',
        right: 0,
        top: -50
    }
})