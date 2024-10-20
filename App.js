import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DonutList from './components/DonutList';
import DonutDetail from './components/DonutDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DonutList">
        <Stack.Screen name="DonutList" component={DonutList} options={{ title: 'Donuts' }} />
        <Stack.Screen name="DonutDetail" component={DonutDetail} options={{ title: 'Donut Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
