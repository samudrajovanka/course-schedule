import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import COLORS from './src/config/colors';

const Stack = createStackNavigator();

import HomeScreen from './src/screens/HomeScreen';
import CourseScreen from './src/screens/CourseScreen';
import AddTask from './src/screens/AddTask';

class App extends Component {
  // UNSAFE_componentWillMount() {
  //   let firebaseConfig = {
  //     apiKey: 'AIzaSyCgOocW3xjIwmrpznKTEkW0qQiI5e31bzU',
  //     authDomain: 'course-schedule-app.firebaseapp.com',
  //     databaseURL: 'https://course-schedule-app.firebaseio.com',
  //     projectId: 'course-schedule-app',
  //     storageBucket: 'course-schedule-app.appspot.com',
  //     messagingSenderId: '151349460460',
  //     appId: '1:151349460460:web:5900e2c8c7ae8f1b2094c9',
  //     measurementId: 'G-RK9NMT4MQ7',
  //   };
  //   // Initialize Firebase
  //   firebase.initializeApp(firebaseConfig);
  //   firebase.analytics();
  // }

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
            <Stack.Screen name="Tambah Tugas" component={AddTask} />
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
