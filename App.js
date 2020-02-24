/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  FlatList,
  SectionList,
  View, Modal,
  TouchableOpacity,
  Text, Button,
  DatePickerAndroid, TimePickerAndroid,
  ViewPagerAndroid
} from 'react-native';

const sciFiCharacters = [
  {
    title: "Babylon 5",
    data: ["John Sheridan", "Michael Garibaldi", "Stephen Franklin", "Jeffrey Sinclair"]
  },
  {
    title: "Star Trek",
    data: ["James Kirk", "Leonard McCoy", "Hikaru Sulu", "Pavel Chekov"]
  },
  {
    title: "Star Wars",
    data: ["Han Solo", "Luke Skywalker", "Leia Organa"]
  },
  {
    title: "Battlestar Galactica",
    data: ["Kara Thrace", "Gaius Baltar", "William Adama", "Laura Roslin"]
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meaningOfLife: 0,
      loveRN: true,
      disabled: false,
      modalVisible: false
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
        <FlatList style={{ height: 80 }}
          data={[
            { key: '1', text: 'Dream Theater' }, { key: '2', text: 'Enchant' },
            { key: '3', text: 'Fates Warning' }, { key: '4', text: 'Kamelot' },
            { key: '5', text: 'Pyramaze' }, { key: '6', text: 'Rush' },
            { key: '7', text: 'Serenity' }, { key: '8', text: 'Shadow Gallery' },
            { key: '9', text: 'Pink Floyd' }, { key: '10', text: 'Queensryche' }
          ]}
          renderItem={({ item }) => <Text>{item.text}</Text>}
        />
        <SectionList style={{ height: 100, borderWidth: 1, padding: 20 }}
          renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>
          }
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ backgroundColor: '#e0e0e0', fontWeight: 'bold' }}>{title}</Text>
          )}
          sections={sciFiCharacters} keyExtractor={(inItem, inIndex) => inItem + inIndex}
        />
        <TouchableOpacity style={{ margin: 5 }} onPress={() => { this.setState({ modalVisible: true }); }}>
          <Text>Tap me to show modal</Text>
        </TouchableOpacity>
        <Modal animationType='slide' transparent={false}
          visible={this.state.modalVisible} presentationStyle='formSheet'
          onRequestColor={() => { console.log('onRequestClose'); }}
        >
          <View Style={{ margin: 100, flex: 1, alignItems: 'center' }}>
            <View style={{ fçex: 1, alignItems: 'center' }}>
              <Text>I am a modal. Aint't I cool??</Text>
              <TouchableOpacity style={{ marginTop: 100 }}
                onPress={() => { this.setState({ modalVisible: false }); }}
              >
                <Text>Tap me to hide modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Button title='Open DatePickerAndroid'
          onPress={
            async () => {
              const { action, date } = await DatePickerAndroid.open({});
              if (action == DatePickerAndroid.dateSetAction) {
                console.log(`date:> ${new Date().toLocaleDateString()}`);
              }

              if (action === DatePickerAndroid.dismissedAction) {
                console.log('Dismissed');
              }
            }
          }
        />
        <Button title='Open TimePickerAndroid' color='purple'
          onPress={
            async () => {
              const { action, hour, minute } = await TimePickerAndroid.open({
              });
              if (action === TimePickerAndroid.timeSetAction) {
                console.log(`time:> ${hour} : ${minute} : ${new Date().getSeconds()}`);
              }
              if (action === TimePickerAndroid.dismissedAction) {
                console.log('Dismissed');
              }
            }
          }
        />
        
      </View>

    );
  }
}
