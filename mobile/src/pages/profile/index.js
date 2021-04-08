import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MyContext from '../../services/context'
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const Profile = () => {
  const { savedMovieList, removeSavedMovie } = useContext(MyContext)

  function Item({ movie }) {
    console.log(movie)
    return (
      <View style={styles.item}>
        <View style={styles.itemDetails}>
          <Image source={{ uri: `${movie.image}` }} style={styles.image}></Image>
          <Text style={styles.title}>{movie.title}</Text>
        </View>
        <TouchableOpacity onPress={() => removeSavedMovie(movie.id)}>
          <Icon name="close" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Image source={{ uri: "https://i.pravatar.cc/300" }} style={styles.avatar} />
        <Text style={styles.name}>Diego</Text>
      </View>
      <FlatList
        style={styles.flatList}
        data={savedMovieList}
        renderItem={({ item }) => <Item movie={item} />}
        keyExtractor={movie => `${movie.id}`}
      />
    </View>
  );
}

export default Profile;