import React from 'react';
import {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import COLORS from '../config/colors';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: this.props.day,
      courses: this.props.courses,
      isUnderBorder: this.props.isUnderBorder,
      days: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    };
  }

  underBorder(isUnder) {
    if (isUnder) {
      return <View style={styles.underBorder}></View>;
    }
  }

  activeDay() {
    const stylesActive = [styles.container];
    if (this.state.day === this.state.days[new Date().getDay()]) {
      stylesActive.push(styles.activeDay);
      return stylesActive;
    }

    return stylesActive;
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Mata Kuliah', {
              day: this.state.day,
              courses: this.state.courses,
            })
          }>
          <View style={this.activeDay()}>
            <Text style={styles.subTitle}>{this.state.day}</Text>
            <Image source={require('../assets/images/arrow.png')}></Image>
          </View>
        </TouchableOpacity>
        {this.underBorder(this.state.isUnderBorder)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingStart: 20,
    paddingEnd: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    color: COLORS.orange,
  },
  underBorder: {
    borderBottomColor: COLORS.aquaLight_05,
    borderBottomWidth: 2,
  },
  activeDay: {
    backgroundColor: COLORS.primaryLight,
  },
});

export default Day;
