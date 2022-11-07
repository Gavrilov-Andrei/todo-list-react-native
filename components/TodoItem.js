import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function TodoItem({el, deleteTodo}) {
  return (
  <TouchableHighlight onPress={() => deleteTodo(el.key)}>
    <Text style={styles.text}>{el.text}</Text>
  </TouchableHighlight>
)}

const styles = StyleSheet.create({
 text: {
    padding: 15
    
 }
});
