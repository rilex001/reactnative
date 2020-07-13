import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [name, setName] = useState('shaun')
  const [person, setPerson] = useState({ name: 'mario', age: 40})
  const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'toad', id: '6' },
    { name: 'bowser', id: '7' },
  ]);

  const clickHandler = () => {
    setName('chun li')
    setPerson({ name: 'luigi', age: 45 })
  }

  const pressHandler = id => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} he is age is {person.age} </Text>
      <View style={styles.buttonContainer}>
        <Button title='Update state' onPress={clickHandler} />
      </View>
      <TextInput 
        multiline
        style={styles.input} 
        placeholder='Mirko Mrkonjic'
        onChangeText={(val) => setName(val)}
      />

      <TextInput 
        placeholder='Change person'
        keyboardType='numeric'
        style={styles.input}
        onChangeText={(val) => setPerson(val)}
      />

      <View style={styles.container}>

      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id} 
        data={people} 
        renderItem={({ item }) => ( 
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity> 
        )}
      />

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
  buttonContainer: {
    marginTop: 20
  },
  input: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    width: 200
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24, 
  }
});
