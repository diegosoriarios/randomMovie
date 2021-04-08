import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
  },
  backgroundDetail: {
    width: '200%',
    height: '70%',
    borderBottomLeftRadius: 100,
    transform: [{ rotate: '20deg'}],
    position: 'absolute',
    left: -100,
    top: -50,
    zIndex: -1,
    backgroundColor: '#00b4d8',
  },
  image: {
    width: '100%',
    //height: 100,
    aspectRatio: 1.2,
  },
  header: {
    position: 'absolute',
    top: 25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '80%',
    backgroundColor: 'grey',
    borderRadius: 50
  },
  search: {
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    // shadowOffset: {width: 50, height: 50},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 20,
  },
  menu: {
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    // shadowOffset: {width: 50, height: 50},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 20,
  },

  //MOVIE CARD
  card: {
    marginTop: 25,
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 25,
    shadowColor: '#000',
    // shadowOffset: {width: 50, height: 50},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 20,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardDate: {
    fontSize: 16,
  },
  cardDescription: {
    fontSize: 18,
    textAlign: 'justify',
  },
});

export default styles;
