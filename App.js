import React, { Component } from 'react';
import BigInt from 'big-integer';
import {
  View,
  Text,
  Modal,
  Button,
  Platform,
  TextInput,
} from 'react-native';

import Header from './src/components/Header';
import styles from './src/components/styles';

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
    let dec = BigInt(0);
    for (let i = 0; i < index; i++) {
      dec += BigInt((bin.charAt(i))) * BigInt(2 ** (index - (i + 1)));
    }
    return dec;
  }

  render() {
    const msg = [
      `The number who you are trying to introduce isn't a binary.\nPlease review the number.`,
      'Binary number valid',
      'Insert the Binary Number'
    ]
    return (
      <View style={styles.container}>
        <Header title="Bin2Dec" />
        <View style={styles.body}>
          <Text style={[styles.msg, { color: this.state.colorBorderInput }]}>{this.state.msg}</Text>
          <TextInput
            value={this.state.textInput}
            style={[styles.input, { borderColor: this.state.colorBorderInput }]}
            keyboardType={Platform.OS === 'ios' ? "number-pad" : "numeric"}
            onChangeText={(inText) => {
              this.setState({ textInput: inText });
              if (!(/[^01]/.test(inText)) && inText.length != 0) {//is a binary number
                this.setState({ buttonDisabled: false, colorBorderInput: 'green', msg: msg[1] });
              }
              else {//isn't a binary number
                this.setState({ buttonDisabled: true, colorBorderInput: 'red', msg: msg[(inText.length == 0) ? 2 : 0] });
              }

            }}
          />
          <Button title='Generator' color={'green'}
            onPress={() => this.setState({ modalVisible: true })}
            disabled={this.state.buttonDisabled}
            style={{ backgroundColor: 'red' }}
          />

          <Modal
            animationType={'slide'}//slide: fade: none
            transparent={true}
            visible={this.state.modalVisible}
          >
            <View style={styles.body}>
              <View style={styles.modalView}>
                <Text style={styles.modalHeader}>The Decimal Number is: </Text>
                <View style={styles.hr} />
                <Text style={styles.modalResult}>{this.bin2dec(this.state.textInput)}</Text>
                <Button
                  title='close'
                  color={'red'}
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