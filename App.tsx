import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/routes/screens/HomeScreen'; 
import RepositoriesScreen from './src/routes/screens/RepositoriesScreen';
import { StyleSheet,} from 'react-native';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Repositories" component={RepositoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
