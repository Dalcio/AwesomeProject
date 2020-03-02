import React, { Component } from 'react';
import {
  View,
  Text, StyleSheet, Platform, Alert, Button, Modal, TextInput, TouchableOpacity
} from 'react-native';

import Header from './src/components/Header';
import styles from './src/components/styles';
import MyButton from './src/components/MyButton';

//const imgPath = './src/images/icons/setting.png';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      buttonDisabled: true,
      textInput: '',
      colorBorderInput: 'green',
      msg: 'Type The Binary Number in Box above',
    }
  }

  bin2dec = (bin) => {
    const index = bin.length;
    let dec = 0;
    for (let i = 0; i < index; i++) {
      dec += parseFloat(bin.charAt(i)) * (2 ** (index - (i + 1)));
    }
    return dec;
  }

  render() {
    const msg = [
      `The number who you are trying to introduce isn't a binary.\nPlease review the number.`,
      'Binary number valid'
    ]
    return (
      <View style={styles.container}>
        <Header title="Bin2Dec" />
        <View style={styles.body}>
          <Text style={{ color: this.state.colorBorderInput, marginBottom: 10 }}>{this.state.msg}</Text>
          <TextInput
            value={this.state.textInput}
            style={[styles.input, { borderColor: this.state.colorBorderInput }]}
            onChangeText={(inText) => {
              this.setState({ textInput: inText });

              if (!(/[^01]/.test(inText)) && inText.length != 0) {//is a binary number

                this.setState({ buttonDisabled: false, colorBorderInput: 'green', msg: msg[1] });
              }
              else {//isn't a binary number
                this.setState({ buttonDisabled: true, colorBorderInput: 'red', msg: msg[0] });
              }

            }}
          />
          <Button title='Generator' color={'green'}
            onPress={() => this.setState({ modalVisible: true })}
            disabled={this.state.buttonDisabled}
          />
          {/*<MyButton />*/}
          <View style={test} />
          <Modal
            animationType={'slide'}//slide: fade: none
            transparent={true}
            visible={this.state.modalVisible}
          >
            <View style={styles.body}>
              <View style={styles.modalView}>
                <Text style={styles.modalHeader}>The Decimal Number is: </Text>
                <Text style={styles.modalResult}>{this.bin2dec(this.state.textInput)}</Text>
                <Button
                  title='close'
                  color={'green'}
                  onPress={() => this.setState({ modalVisible: false })}
                />
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

const test = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
});