import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState(initialState)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello, World</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Lorem ipsum dolar si amet. </Text>
        <Text>Lorem ipsum dolar si amet. </Text>
        <Text>Lorem ipsum dolar si amet. </Text>
        <Text>Lorem ipsum dolar si amet. </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20
  },
  boldText: {
    fontWeight: 'bold'
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20
  }
});
