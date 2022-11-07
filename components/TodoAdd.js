import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function TodoAdd ({addHandler}) {
    const [text, setValue] = useState('')

    const onChange = (text) => {
        setValue(text)
    }

  return (
  <View>
    <TextInput style={styles.input} 
    onChangeText={onChange}
    placeholder='Введите задачу'
    />
    <Button 
    title='Добавить задачу'
    color='green'
    onPress={() => addHandler(text)}
    />
  </View>
 )
}

const styles = StyleSheet.create({
    input: {
        padding: 10
    }
});
