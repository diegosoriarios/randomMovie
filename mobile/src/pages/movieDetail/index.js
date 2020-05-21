import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const movieDetail = ({route}) => {
  const {movie} = route.params;
  return (
    <View>
      <View style={styles.backgroundDetail} />
      <View style={styles.details}>
        <View style={styles.leftDetails}>
          <Text>Hi</Text>
          <Text>Hi</Text>
          <Text>Hi</Text>
        </View>
        <View style={styles.rightDetails}>
          <Image source={movie.image} alt={movie.title} />
        </View>
      </View>
      <TouchableHighlight onPress={() => {}}>
        <Icon name="bookmark" size={20} color="#000" />
      </TouchableHighlight>
    </View>
  );
};

export default movieDetail;
