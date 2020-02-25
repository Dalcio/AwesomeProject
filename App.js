import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text, Platform, FlatList
} from 'react-native';
import Header from './components/Header';
import InputBar from './components/InputBar';
import TodoItem from './components/TodoItem';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todoInput: '',
      todos: [
        { id: 0, title: 'Take out the trash', done: false },
        { id: 1, title: 'Cook dinner', done: false }
      ]
    }
  }

  addNewTodo() {

    let todos = this.state.todos;//todo 1

    todos.unshift({
      id: todos.length + 1,
      title: this.state.todoInput,
      done: false,
    });//todo 2
    this.setState({
      todos,
      todoInput: '',
    });
  }
  addNewToList() {

    let lista = this.state.lista;//todo 1

    lista.unshift({
    });
  }

  toggleDone(item) {
    let todos = this.state.todos;

    todos = todos.map((todo) => {

      if (todo.id == item.id) {
        todo.done = !todo.done;
      }

      return todo;
    });

    this.setState({ todos });
  }

  removeTodo(itemToRemove) {
    let todos = this.state.todos;

    todos = todos.filter((itemWillRemove) => {
      return itemToRemove.id !== itemWillRemove.id;
    });

    this.setState({ todos });
  }

  render() {
    const statusBar = (Platform.OS == 'ios') ? <View style={styles.statusBar}></View> : <View></View>;

    return (
      <View style={styles.container}>
        <Header title="todapp" />
        <InputBar
          textChange={todoInput => this.setState({ todoInput })}
          addNewTodo={() => this.addNewTodo()}
          todoInput={this.state.todoInput}
        />
        <FlatList
          data={this.state.todos}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TodoItem
                todoItem={item}
                toggleDone={() => this.toggleDone(item)}
                removeTodo={() => this.removeTodo(item)}
              />
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBar: {
    backgroundColor: '#FFCE00',
    height: 20,
  }
});