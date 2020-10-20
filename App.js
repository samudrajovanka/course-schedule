import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import HomeScreen from './android/app/screen/HomeScreen';
import CourseScreen from './android/app/screen/CourseScreen';

class App extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#01C5C4" barStyle="light-content" />
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
    card: '#01C5C4',
    text: '#fff',
  },
};

export default App;
