import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import COLORS from './src/config/colors';

const Stack = createStackNavigator();

import HomeScreen from './src/screens/HomeScreen';
import CourseScreen from './src/screens/CourseScreen';

class App extends Component {
  render() {
    return (
      <>
        <StatusBar
          backgroundColor={COLORS.aquaLight}
          barStyle="light-content"
        />
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator initialRouteName="Jadwal Kuliah">
            <Stack.Screen name="Jadwal Kuliah" component={HomeScreen} />
            <Stack.Screen name="Mata Kuliah" component={CourseScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: COLORS.aquaLight,
    text: COLORS.white,
  },
};

export default App;
