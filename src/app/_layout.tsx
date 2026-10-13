import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
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
    <StatusBar style="dark" />

    </>
  );
}
