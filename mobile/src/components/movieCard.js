import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function MovieCard(movie) {
    alert(movie.title)
    return (
        <View style={styles.card}>
            <Text>{movie.title}</Text>
            <Image source={{ uri: `${movie.image}` }} alt={movie.title} style={styles.image} />
            <Text>{movie.release_date}</Text>
            <Text>{movie.overview}</Text>
            <Text>Rating: {movie.vote_average}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '60%',
        backgroundColor: "white",
    }
})