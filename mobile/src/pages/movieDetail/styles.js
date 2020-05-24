import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  backgroundDetail: {
    height: '40%',
    width: '100%',
    backgroundColor: '#00b4d8',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  header: {
    //position: 'absolute',
    top: 25,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  back: {
    marginLeft: 20,
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 50, height: 50},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 20,
  },
  bookmark: {
    marginLeft: 20,
    marginTop: -25,
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 50, height: 50},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 20,
  },
  headerDetails: {
    flexDirection: 'row',
    padding: 20,
  },
  leftDetails: {
    width: '50%',
    justifyContent: 'space-around',
  },
  rightDetails: {
    width: '50%',
  },
  image: {
    width: '100%',
    //height: 100,
    aspectRatio: 1.2,
  },
});

export default styles;
