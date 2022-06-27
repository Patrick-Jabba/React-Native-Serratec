import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export const Counter = () => {
  const [counter, setCounter] = useState(0);


  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/turma-arrepio.png")} alt="logo"
        style={styles.image}
      />
      <Text style={styles.text}>
        {counter}
      </Text>
      <TouchableOpacity
        color='#282a36'
        style={styles.button}
        onPress={() => setCounter(counter + 1)}
      >
        <Text
          style={{ color: '#f8f8f2', fontWeight: 'bold' }}
        >
          ACRESCENTAR
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        color='#282a36'
        style={styles.buttonZerar}
        onPress={() => setCounter(0)}
      >
        <Text
          style={{ color: '#f8f8f2', fontWeight: 'bold' }}
        >
          ZERAR
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6272a4',
    height: 500,
    width: '70%',
    maxWidth: 700,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 7,
    borderColor: '#bd93f9'
  },

  text: {
    color: '#ff79c6',
    fontSize: 72,
    fontWeight: 'bold',

  },

  image: {
    height: 200,
    width: 200,
  },

  button: {
    borderWidth: 1,
    borderColor: '#ff5555',
    backgroundColor: '#282a36',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderRadius: 30,
    marginBottom: 10,
  },

  buttonZerar: {
    borderWidth: 3,
    borderColor: '#282a36',
    backgroundColor: '#ff5555',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderRadius: 30,
    marginBottom: 10,
  },

}

)