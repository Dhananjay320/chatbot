import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Dimensions } from 'react-native';
import ApiCallComponent from './ApiCallComponent';

const { width } = Dimensions.get('window');

 export const App = () => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const { handleApiRequest } = ApiCallComponent({ userInput, setResponse, setLoading });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Type your message"
        placeholderTextColor="#808080"
        value={userInput}
        onChangeText={text => setUserInput(text)}
        onSubmitEditing={handleApiRequest}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Submit"
          onPress={handleApiRequest}
          color="#000"
        />
      </View>
      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <Text style={styles.responseText}>{response}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textInput: {
    width: width * 0.8,
    height: 40,
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    width: width * 0.6,
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 16,
    color: 'gray',
    marginTop: 20,
  },
  responseText: {
    fontSize: 16,
    color: '#000',
    marginTop: 20,
    textAlign: 'center',
  },
});


