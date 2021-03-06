import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './src/RootNavigation'
import IndexScreen from './src/screens/IndexScreen' 
import {Provider} from './src/context/BlogContext'
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen title="Index" name="Index" component={IndexScreen} />
        <Stack.Screen title="Show" name="Show" component={ShowScreen} />
        <Stack.Screen title="Create" name="Create" component={CreateScreen} />
        <Stack.Screen title="Edit" name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => {
  return (
  <Provider>
    <App/>
  </Provider>
  )
}
