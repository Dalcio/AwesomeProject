/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Button,
  View,
  Text
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meaningOfLife: 0,
      loveRN: true,
      disabled: false
    }
  }
  enable() {
    setInterval(() => {
      this.setState({ disabled: false });
    }, 2000);
  }
  render() {
    return (
      <View>
        <Text>Welcome to React native 2</Text>
        <Button title="Go ahead, press me, I dare ya!"
          onPress={() => {
            console.log('pressed!');
            this.setState({ disabled: true });
            this.enable();
          }} color={'purple'} disabled={this.state.disabled} />
      </View>
    );
  }
}
