import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Landing from './components/landing/Landing';
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
