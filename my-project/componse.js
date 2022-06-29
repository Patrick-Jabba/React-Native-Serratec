import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const App = ({color="#0ff", text="anything"}) => {
  return (
    <View style={styles.container(color)}>
        <Text style={styles.text}>{text}</Text>
    </View>
  )
}


const styles = StyleSheet.compose ({
    container: (color) => ({
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color,
}),

text: {
    color: "#120A8F",
    fontWeight: "bold",
    fontSize: 30,
}

});

export default App;