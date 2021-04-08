import {StyleSheet} from 'react-native';

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
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    itemDetails: {
      flexDirection: 'row',
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
    },
    avatar: { width: 300, height: 300, borderRadius: 300 },
    name: { fontSize: 28, fontWeight: "bold" }
  });

  export default styles;