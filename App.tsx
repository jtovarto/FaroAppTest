import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Screen1} from './src/screen/Screen1';
import {Screen2} from './src/screen/Screen2';
import {Screen3} from './src/screen/Screen3';
import {Screen4} from './src/screen/Screen4';

const Stack = createNativeStackNavigator();

const App = () => {
  console.log('RENDER APP TSX');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen3">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen4" component={Screen4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
