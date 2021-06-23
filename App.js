import React, { useEffect, useState } from 'react';
import { StyleSheet,Button, Text, View, FlatList, ActivityIndicator, ImageBackground, Modal} from 'react-native';

export default function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(false)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      setUsers(data)
      setLoading(false)
    })
  }, [])

  if(loading){
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff"/>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.photo}
        source={{uri: "https://placekitten.com/g/200/300"}}
      >
        <FlatList
        data={users}
        renderItem={({item}) => <Text style={styles.text}>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
      </ImageBackground>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.content}>
            <Text>This is a modal</Text>
            <Text>This is a modal</Text>
            <Text>This is a modal</Text>
            <Text>This is a modal</Text>
            <Button title="Close modal" onPress={() => setModal(false)}/>
          </View>
        </View>
      </Modal>
      <Button title="Open modal"  onPress={() => setModal(true)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    padding: 80
  },
  center:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  photo: {
    height: 290,
    width: 290
  },
  text: {
    color: "white",
    fontSize: 20
  },
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
  }
});
