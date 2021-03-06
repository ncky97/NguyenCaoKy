import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

export default class TodoItem extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const todoItem = this.props.todoItem;

    return (
      <TouchableOpacity
        style={styles.todoItem}
        onPress={() => this.props.toggleDone()}
      >
        <Text style={(todoItem.done) ? { color: '#AAAAAA' } : { color: '#313131' }} numberOfLines = {1}>
          { todoItem.title }
        </Text>

        <Button style={styles.button}
          title="DEL"
          color={(todoItem.done) ? 'rgba(200, 0, 0, 0.5)' : 'rgba(255, 0, 0, 1)' }
          onPress={() => this.props.removeTodo()}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  todoItem: {
    margin:5,
    width: '100%',
    height: 40,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    borderRadius:10,
    borderWidth:1,
    borderColor:'gray'
  },
  button:{
    marginRight:4,
    borderRadius:20
  }
})