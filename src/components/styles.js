import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    body: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    input: {
      marginBottom: 40,
      borderWidth: 1,
      width: (screenWidth-50),
      height: 50,
      paddingLeft: 10,
      borderRadius: 10,
    },
    generatorBody: {
      marginTop: 40,
      height: 50,
      width: 200,
    },
    generatorButtonBody: {
      flex: 1,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'green',
    },
    generatorTextBody: {
      marginTop: 10,
      color: '#fff',
      height: 60,
    },
    generatorImg: {
      width: 30,
      height: 30,
    },
    modalView: {
      width: (screenWidth-10),
      height: 250,
      alignItems: "center",
      justifyContent: 'center',
      backgroundColor: 'green',
    },
    modalHeader: {
      color: 'rgba(255, 255, 255, .7)',
      fontSize: 50,
      textAlign: 'center',
    },
    modalResult: {
      color: 'rgb(255, 255, 255)',
      fontSize: 30,
      marginTop: 15,
      marginBottom: 15,
    },
    hr:{
      backgroundColor: 'rgba(255, 255, 255, .7)',
      width: (screenWidth - 30),
      height: 1,
    },
    msg: {
      marginBottom: 10, 
      fontSize: 20,
    }
  
  });

  export default styles;