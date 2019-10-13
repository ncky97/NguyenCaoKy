import React from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import Header2 from './components/Header2';
import InputBar from './components/InputBar';
import TodoItem from './components/TodoItem';
import {Header, Title, Left, Right, Body} from 'native-base';
export default class App extends React.Component {
  constructor () {
    super();

    this.state = {
      todoInput: '',
      todos: [
        { id: 0, title: 'Take out the trash', done: false },
        { id: 1, title: 'Cook dinner', done: false }
      ]
    }
  }

  addNewTodo () {
    let todos = this.state.todos;

    todos.unshift({
      id: todos.length + 1,
      title: this.state.todoInput,
      done: false
    });

    this.setState({
      todos: todos,
      todoInput: ''
    });
  }

  toggleDone (item) {
    let todos = this.state.todos;

    todos = todos.map((todo) => {
      if (todo.id == item.id) {
        todo.done = !todo.done;
      }

      return todo;
    })

    this.setState({todos});
  }

  removeTodo (item) {
    let todos = this.state.todos;

    todos = todos.filter((todo) => todo.id !== item.id);

    this.setState({todos});
  }

  render() {
    const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>;

    return (
      <View style={styles.container}>
        {statusbar}
        <Header>
          <Left/>
          <Body>
            <Title style={{marginLeft:70}}>Notepad</Title>
          </Body>
          <Right />
        </Header>
        <InputBar
          addNewTodo={() => this.addNewTodo()}
          textChange={todoInput => this.setState({ todoInput })}
          todoInput={this.state.todoInput}
        />
        

        <FlatList style = {styles.flatlist}
          data={this.state.todos}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <TodoItem todoItem={item} numberOflines ={2} toggleDone={() => this.toggleDone(item)} removeTodo={() => this.removeTodo(item)} />
            )
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
  statusbar: {
    backgroundColor: '#FFCE00',
    height: 20
  },
  flatlist:{
    flex:1,
    flexDirection:'column'
  }
});