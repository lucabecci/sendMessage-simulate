import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      setUsers(data)
      setLoading(false)
    })
  }, [])

  if(loading){
    return <Text>Cargando...</Text>
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom:5,
    marginTop: 5,
    width: "100%"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: "auto",
    paddingTop: 200
  }
});
