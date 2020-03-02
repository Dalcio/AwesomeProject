import { StyleSheet } from 'react-native';

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
      //borderRadius: 50,
      marginBottom: 40,
      //borderColor: 'green',
      borderWidth: 1,
      width: '30%',
      height: 50,
      paddingLeft: 10,
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
      width: '50%',
      height: 250,
      alignItems: "center",
      justifyContent: 'center',
      backgroundColor: 'green',
    },
    modalHeader: {
      color: 'rgba(255, 255, 255, .7)',
      fontSize: 50,
    },
    modalResult: {
      color: 'rgb(255, 255, 255)',
      fontSize: 30,
      marginTop: 15,
      marginBottom: 15,
    },
  
  });

  export default styles;