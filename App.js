import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [message, setMessage] = React.useState("")
  const [submit, setsubmit] = React.useState("")

  const final = (t) => {
    alert(t)
  }
  return (
    <View style={styles.container}>
      <Text>Send message</Text>
      <TextInput 
      style={styles.input}
      placeholder="Insert the message on here"
      onChangeText={t => setMessage(t)}
      value={message}
    />
    <Button 
      title="Send"
      onPress={() => {
        setsubmit(message)
        final(message)
        setMessage("") 
        setsubmit("") 
      }}
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
  }
});
