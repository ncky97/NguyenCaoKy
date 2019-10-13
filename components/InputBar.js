import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const InputBar = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input} placeholder='Nhập ghi chú'
        onChangeText={(todoInput) => props.textChange(todoInput)}
        value={props.todoInput}
      />
      <TouchableOpacity style={styles.addButton} onPress={props.addNewTodo}>
        <Text style={styles.addButtonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#171717',
    shadowOpacity: .1,
    margin:5
  },
  input: {
    backgroundColor: '#E0F8F1',
    flex: 1,
    fontSize: 18,
    height: 45,
    borderWidth:1,
    borderRadius:20,
    borderColor:'#CEF6F5'
  },
  addButton: {
    width: 45,
    backgroundColor: '#40FF00',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20,

  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700'
  }
})

export default InputBar;