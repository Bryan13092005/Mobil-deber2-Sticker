import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Acerca de</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E4E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#001F3F',
    fontSize: 22,
    fontWeight: '600',
  },
});
