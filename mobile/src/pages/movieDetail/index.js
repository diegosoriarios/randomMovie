/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getGenreName} from '../../services/api';
Icon.loadFont();

const movieDetail = ({route}) => {
  const {movie} = route.params;
  const [genres, setGenres] = useState([]);

  async function getGenres() {
    const grs = await getGenreName(movie.genre_ids);
    setGenres(grs);
    console.log(genres);
  }

  useEffect(() => getGenres(), []);

  return (
    <View style={styles.container}>
      <View style={styles.backgroundDetail} />
      <View style={styles.header}>
        <TouchableOpacity style={styles.back} onPress={() => {}}>
          <Icon name="arrow-back" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.details}>
        <View style={styles.headerDetails}>
          <View style={styles.leftDetails}>
            <Text>{movie.vote_average}</Text>
            {genres.map(genre => (
              <Text>{genres}</Text>
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
      <TouchableHighlight style={styles.bookmark} onPress={() => {}}>
        <Icon name="bookmark" size={20} color="#000" />
      </TouchableHighlight>
      <Text>{movie.title}</Text>
      <Text>{movie.overview}</Text>
    </View>
  );
};

export default movieDetail;
