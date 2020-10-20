import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

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
    color: '#F39233',
  },
  container: {
    flexDirection: 'row',
    marginTop: 5,
  },
  radius: {
    backgroundColor: '#f3c623',
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
    color: '#F4F6FF',
    fontWeight: 'bold',
  },
  underBorder: {
    borderBottomColor: '#01C5C455',
    borderBottomWidth: 2,
  },
});

export default Course;
