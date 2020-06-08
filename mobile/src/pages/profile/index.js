import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MyContext from '../../services/context'
import { FlatList } from 'react-native-gesture-handler';

const Profile = () => {
  const { movieList } = useContext(MyContext)

  function Item({movie}) {
    console.log(movie)
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{movie.title}</Text>
        <Image source={{uri: `${movie.image}`}} style={styles.image}></Image>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text>Profile</Text>
      </View>
      <FlatList 
        style={styles.flatList}
        data={movieList}
        renderItem={({item}) => <Item movie={item} />}
        keyExtractor={movie => `${movie.id}`}
      />
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flatList: {
    flex: 2,
  },
  item: {
    backgroundColor: '#555',
    padding: 20,
    width: '90%',
    marginVertical: 2,
    marginHorizontal: 16,
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 25,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    //aspectRatio: 1.2
  }
});