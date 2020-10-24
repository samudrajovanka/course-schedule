import React, {Component} from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';

import Head from '../components/Head';
import Day from '../components/Day';
import Time from '../components/Time';
import AppButton from '../components/AppButton';
import COLORS from '../config/colors';
import courses from '../config/courses';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {courses: courses};
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Head title={'Hello Jovan'} />
          <View style={styles.container}>
            <Time />
            <View style={styles.card}>
              <Day
                day="Senin"
                isUnderBorder="true"
                navigation={this.props.navigation}
                courses={this.state.courses.senin}
              />
              <Day
                day="Selasa"
                isUnderBorder="true"
                navigation={this.props.navigation}
                courses={this.state.courses.selasa}
              />
              <Day
                day="Rabu"
                isUnderBorder="true"
                navigation={this.props.navigation}
                courses={this.state.courses.rabu}
              />
              <Day
                day="Kamis"
                isUnderBorder="true"
                navigation={this.props.navigation}
                courses={this.state.courses.kamis}
              />
              <Day
                day="Jumat"
                navigation={this.props.navigation}
                courses={this.state.courses.jumat}
              />
            </View>
            <View style={styles.button}>
              <AppButton
                title="Tugas"
                backgroundColor={COLORS.aquaLight}
                icon="plus"
                color={COLORS.white}
                callBack={() => this.props.navigation.navigate('Tambah Tugas')}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    backgroundColor: 'white',
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    marginTop: 50,
    alignSelf: 'center',
  },
});

export default HomeScreen;
