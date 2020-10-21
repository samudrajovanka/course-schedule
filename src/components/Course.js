import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import COLORS from '../config/colors';

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: this.props.course,
      isUnderBorder: this.props.isUnderBorder,
    };
  }

  underBorder(isUnder) {
    if (isUnder) {
      return <View style={styles.underBorder}></View>;
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.course}>{this.state.course.course}</Text>
        <View style={styles.container}>
          <View style={[styles.radius, styles.time]}>
            <Text style={styles.data}>{this.state.course.time}</Text>
          </View>
          <View style={[styles.radius, styles.class]}>
            <Text style={styles.data}>{this.state.course.class}</Text>
          </View>
        </View>
        {this.underBorder(this.state.isUnderBorder)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  course: {
    fontSize: 25,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    color: COLORS.orange,
  },
  container: {
    flexDirection: 'row',
    marginTop: 5,
  },
  radius: {
    backgroundColor: COLORS.yellow,
    marginStart: 10,
    marginBottom: 10,
    padding: 5,
    borderRadius: 120,
  },
  time: {
    width: 120,
  },
  class: {
    width: 30,
  },
  data: {
    fontSize: 15,
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: 'bold',
  },
  underBorder: {
    borderBottomColor: COLORS.aquaLight_05,
    borderBottomWidth: 2,
  },
});

export default Course;
