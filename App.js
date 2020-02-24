/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Picker,
  View,
  Text
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bestCaption: 'dalcio'
    }
  }
  render() {
    return (
      <View>
        <Text>Welcome to React native 2</Text>
        <Picker selectedValue={this.state.bestCaption} style={{ height: 100, width: 200 }}
          onValueChange={(inValue, inIndex) => {
            this.setState({ bestCaption: inValue });
            console.log(`inIndex ${ inIndex }`);
          }}
        > 
          <Picker.Item label='Dálcio Macute Garcia' value='dalcio' />
          <Picker.Item label='Ezedélio Macuete Garcia' value='ezedelio' />
          <Picker.Item label='Judénia Macuete Garcia' value='judenia' />
          <Picker.Item label='Etinério Macuete Garcia' value='etinerio' />
          <Picker.Item label='Isabel João Pedro' value='isabel' />
          <Picker.Item label='Dalioneth Macuete Garcia' value='dalioneth' />
          <Picker.Item label='Ephatha de Assunção Macuete Garcia' value='ephatha' />
        </Picker>
      </View>
    );
  }
}
