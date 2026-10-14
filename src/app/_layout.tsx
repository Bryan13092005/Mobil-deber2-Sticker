import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
    {/* Define las rutas principales y la pantalla de ruta desconocida. */}
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="+not-found"
        options={{
          headerStyle: { backgroundColor: '#E2E4E9' },
          headerTintColor: '#001F3F',
          headerShadowVisible: false,
        }}
      />
    </Stack>
    {/* Mantiene la barra de estado en modo oscuro. */}
    <StatusBar style="dark" />

    </>
  );
}
