import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: '#D33724',
    headerStyle: {
      backgroundColor: '#E2E4E9',
    },
    headerShadowVisible: false,
    headerTintColor: '#001F3F',
    tabBarStyle: {
      backgroundColor: '#FFFFFF',
    },
      }}>
      <Tabs.Screen name="index" options={{ title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ), }} />
      <Tabs.Screen name="about" options={{ title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ), }} />
    </Tabs>
  );
}
