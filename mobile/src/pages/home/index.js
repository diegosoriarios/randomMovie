import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Keyboard,
  ToastAndroid,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import styles from './styles';
import {findMovieId, findSimilarMovie} from '../../services/api';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { dateFormat } from '../../services/format';

function HomePage() {
  const [movieName, setMovieName] = useState('');
  const [movie, setMovie] = useState(null);

  const navigation = useNavigation();

  async function findMovie() {
    if (movieName.length > 0) {
      const id = await findMovieId(movieName);
      const similarMovie = await findSimilarMovie(id);
      setMovie(similarMovie);
      console.log(similarMovie.image);
      Keyboard.dismiss();
    } else {
      ToastAndroid.show(
        'Digite um filme antes...',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.backgroundDetail} />
      <View style={styles.header}>
        <TextInput
          selectionColor="white"
          style={styles.textInput}
          value={movieName}
          onChangeText={text => setMovieName(text)}
        />
        <TouchableOpacity style={styles.search} onPress={findMovie}>
          <Icon name="search" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      {movie && (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Detail', {movie})}>
          <Image
            source={{uri: `${movie.image}`}}
            alt={movie.title}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>{movie.title}</Text>
          <Text style={styles.cardDate}>{dateFormat(movie.release_date)}</Text>
          <Text style={styles.cardDescription} numberOfLines={3}>
            {movie.overview}
          </Text>
          <Text style={styles.cardRating}>Rating: {movie.vote_average}</Text>
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  );
}

export default HomePage;
