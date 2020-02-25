/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text, Button, AccessibilityInfo,
  Alert, Platform, Vibration
} from 'react-native';

class ScreenReaderStatusExample extends React.Component {
  state = { isEnable: false };
  componentDidMount() {
    AccessibilityInfo.addEventListener('change', this.toggleState);
    AccessibilityInfo.fetch().done((isEnabled) => {
      this.setState({ isEnabled: isEnabled });
    });
  }
  componentWillUnmount() {
    AccessibilityInfo.removeEventListener("change", this.toggleState);
  }
  toggleState = (isEnabled) => {
    this.setState({ isEnabled: isEnabled });
  };
  render() {
    return (
      <View>
        <Text>
          The screen reader is{" "}
          {this.state.isEnabled ? "enabled" : "disabled"}.
    </Text>
      </View>
    );
  }
}


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <View>
        <Text>Welcome to React native 2</Text>
        <ScreenReaderStatusExample />
        <Button title='Alert' color='black'
          onPress={() =>
            Alert.alert('Greetings, human!',
              'You know just how to push my buttons!',
              [{ text: 'Ok' }], { cancelable: false }
            )
          }
        />
        <Text>Plataform: {Platform.OS}{'\n'}Version: {Platform.Version}{'\n'}
        </Text>
      </View>

    );
  }
}