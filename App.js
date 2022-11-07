import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import TodoAdd from './components/TodoAdd';

export default function App() {
const [todo, setTodos] = useState([
  {text: 'Купить молоко', key: 1},
  {text: 'Купить хлеб', key: 2},
  {text: 'Купить масло', key: 3},
  {text: 'Купить воду', key: 4}
])

const addHandler = (text) => {
  setTodos((list) => {
    return [
      {text: text, key: Math.random().toString(36).substring(7) },
      ...list
    ]
  })
}

const deleteTodo = (key) => {
  setTodos((list) => {
    return list.filter(todo => todo.key != key)
  })
}

  return (
    <View>
      <Header/>
      <TodoAdd addHandler={addHandler}/>
      <View>
      <FlatList data={todo} renderItem={({item}) => (
        <TodoItem el={item} deleteTodo={deleteTodo}/>
      )} />
      </View>
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
