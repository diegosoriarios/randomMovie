/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getGenreName} from '../../services/api';
import MyContext from '../../services/context';

const MovieDetail = ({route}) => {
  const {movie} = route.params;
  const [genres, setGenres] = useState([]);
  const [iconName, setIconName] = useState("bookmark");
  const navigation = useNavigation();
  const { bookmarkMovie, movieIsSaved } = useContext(MyContext)

  async function getGenres() {
    const grs = await getGenreName(movie.genre_ids);
    setGenres(grs);
  }

  function bookmarkBook() {
    bookmarkMovie(movie);
    movieIsBookmarked();
  }

  function movieIsBookmarked() {
    if(movieIsSaved(movie)) setIconName("bookmark");
    else setIconName("bookmark-border");
  }

  useEffect(() => {
    getGenres();
    movieIsBookmarked();
  });

  return (
    <View style={styles.container}>
      <View style={styles.backgroundDetail} />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate('Feed')}>
          <Icon name="arrow-back" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.details}>
        <View style={styles.headerDetails}>
          <View style={styles.leftDetails}>
            <Text>{movie.vote_average}</Text>
            {genres.map(genre => (
              <Text key={genre}>{genre}</Text>
            ))}
          </View>
          <View style={styles.rightDetails}>
            <Image
              style={styles.image}
              source={{uri: movie.image}}
              alt={movie.title}
            />
          </View>
        </View>
      </View>
      <TouchableHighlight style={styles.bookmark} onPress={bookmarkBook}>
        <Icon name={iconName} size={20} color="#000" />
      </TouchableHighlight>
      <View style={styles.content}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.description}>{movie.overview}</Text>
      </View>
    </View>
  );
};

export default MovieDetail;
