import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
      {/* Personaliza el título y ofrece volver a la pantalla principal. */}
      <Stack.Screen options={{ title: 'Ruta no encontrada' }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
         Regresar a la página principal
        </Link>
      </View>
    </>
  );
}

// Centra el enlace de retorno en la pantalla.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E4E9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#357CA5',
    textAlign: 'center',
    paddingHorizontal: 24,
    minHeight: 44,
  },
});
