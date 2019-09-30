import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  }
});

const Home = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Adicionar nova tarefa"
        placeholderTextColor="#072F5F"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        // onChangeText={text => onChangeText(text)}
        // value={value} 
      />
      <Text style={styles.text}>Today tasks:</Text>
    </View>
  );
};

export default Home;
