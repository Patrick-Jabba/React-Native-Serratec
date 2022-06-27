import { StyleSheet, View } from 'react-native';
import { Counter } from './src/Contador';

export default function App() {
  return (
    <View style={styles.container}>
      <Counter value={0}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282a36',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#f8f8f2'
  },
});
